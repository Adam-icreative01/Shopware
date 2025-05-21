import template from './swag-blog-category-detail.html.twig';


const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

const { mapPropertyErrors } = Shopware.Component.getComponentHelper();


Component.register('swag-blog-category-detail', {
    template,
    inject : [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('placeholder'),
        Mixin.getByName('notification'),
        Mixin.getByName('discard-detail-page-changes')('blogCategory'),
    ],

    data() {
        return {
            blogCategory: null,
            customFieldSets: [],
            isLoading: false,
            isSaveSuccessful: false,
            languageId: Shopware.Context.api.languageId
        }
    },

    props : {
        blogCategoryId: {
            type: String,
            required: false,
            default: null
        }
    },

    metaInfo() {
        return {
            title: this.$createTitle(this.identifier)
        };
    },

    computed : {
        identifier() {
            return this.placeholder(this.blogCategory, 'name');
        },

        blogCategoryIsLoading() {
            return this.isLoading || this.blogCategory == null;
        },

        blogCategoryRepository() {
            return this.repositoryFactory.create('blog_category');
        },

        customFieldSetRepository() {
            return this.repositoryFactory.create('custom_field_set');
        },

        customFieldSetCriteria() {
            const criteria = new Criteria(1, null);
            criteria.addFilter(Criteria.equals('relations.entityName', 'blog_category'));

            return criteria;
        },

        ...mapPropertyErrors('blogCategory', ['name']),
    },

    watch : {
        blogCategoryId() {
            this.createdComponent();
        }
    },

    created () {
        this.createdComponent();        
        // this.loadEntity();
    },

    methods: {
        onChangeLanguage(languageId) {
            this.languageId = languageId;
            this.loadEntity(this.blogCategory.id);
        },

        createdComponent() {
            const id = this.$route.params.id;

            Shopware.ExtensionAPI.publishData({
                id: 'swag-blog-category-detail__blogCategory',
                path: 'blogCategory',
                scope: this,
            });
            if (id) {
                this.loadEntity(id);
                return;
            }

            Shopware.State.commit('context/resetLanguageToDefault');
            this.blogCategory = this.blogCategoryRepository.create();
        },

        async loadEntity(id) {            
            this.isLoading = true;

            const [
                blogCategoryResponse,
                customFieldResponse,
            ] = await Promise.allSettled([
                this.blogCategoryRepository.get(id),
                this.customFieldSetRepository.search(this.customFieldSetCriteria),
            ]);

            if (blogCategoryResponse.status === 'fulfilled') {
                this.blogCategory = blogCategoryResponse.value;
            }

            if (customFieldResponse.status === 'fulfilled') {
                this.customFieldSets = customFieldResponse.value;
            }

            if (blogCategoryResponse.status === 'rejected' || customFieldResponse.status === 'rejected') {
                this.createNotificationError({
                    message: this.$tc('global.notification.notificationLoadingDataErrorMessage'),
                });
            }

            this.isLoading = false;
        },

        abortOnLanguageChange() {
            return this.blogCategoryRepository.hasChanges(this.blogCategory);
        },

        saveOnLanguageChange() {
            return this.onSave();
        },

        onChangeLanguage() {
            this.loadEntity(this.blogCategory.id);
        },

        onSave() {            
            this.isLoading = true;

            console.log("Saving blog category...", this.blogCategoryId, this.blogCategory);
            this.blogCategoryRepository
                .save(this.blogCategory, Shopware.Context.api, { languageId: this.languageId })
                .then(() => {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    if (this.blogCategoryId === null) {
                        this.$router.push({
                            name: 'swag.blog.category.detail',
                            params: { id: this.blogCategory.id },
                        });
                        return;
                    }

                    this.loadEntity(this.blogCategory.id);
                })
                .catch((exception) => {
                    this.isLoading = false;
                    this.createNotificationError({
                        message: this.$tc('global.notification.notificationSaveErrorMessageRequiredFieldsInvalid'),
                    });
                    throw exception;
                });
        },

        onCancel() {
            this.$router.push({ name: 'swag.blog.category.list' });
        }
    }
});