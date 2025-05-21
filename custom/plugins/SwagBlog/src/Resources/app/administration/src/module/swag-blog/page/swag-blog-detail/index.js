import template from './swag-blog-detail.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

const { mapPropertyErrors } = Shopware.Component.getComponentHelper();

Component.register('swag-blog-detail', {
    template,
    inject : [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('placeholder'),
        Mixin.getByName('notification'),
        Mixin.getByName('discard-detail-page-changes')('blog'),
    ],
    data() {
        return {
            blog: {
                blogCategories : [],
                products : [],
            },            
            customFieldSets: [],
            isLoading: false,
            isSaveSuccessful: false,
            languageId: Shopware.Context.api.languageId,
        }
    },

    props : {
        blogId : {
            type: String, 
            required: true,
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
            return this.placeholder(this.blog, 'name');
        },

        blogIsLoading() {
            return this.isLoading || this.blog == null;
        },

        blogRepository() {
            return this.repositoryFactory.create('blog');
        },

        customFieldSetRepository() {
            return this.repositoryFactory.create('custom_field_set');
        },

        customFieldSetCriteria() {
            const criteria = new Criteria(1, null);
            criteria.addFilter(Criteria.equals('relations.entityName', 'blog'));

            return criteria;
        },
        
        categoryRepository() {
            return this.repositoryFactory.create('blog_category');
        },

        categoryCriteria() {
            return new Criteria(1, 500); 
        },

        productRepository() {
            return this.repositoryFactory.create('product');
        },

        productCriteria() {
            return new Criteria(1, 500); 
        },

        ...mapPropertyErrors('blog', ['name', 'author', 'active']),
    },

    watch : {
        blogId() {
            this.createdComponent();
        }
    },

    created () {
        this.createdComponent();         
    },

    methods : {   
        loadCategories() {
            this.categoryRepository.search(this.categoryCriteria, Shopware.Context.api).then(result => {
                this.categoryCollection = result;
            });
        },

        loadProducts() {
            this.productRepository.search(this.productCriteria, Shopware.Context.api).then(result => {
                this.productCollection = result;
            })
        },

        onChangeLanguage(languageId) {
            this.languageId = languageId;
            this.loadEntity(this.blog.id);
        },

        createdComponent() {
            const id = this.$route.params.id;

            Shopware.ExtensionAPI.publishData({
                id: 'swag-blog-detail__blog',
                path: 'blog',
                scope: this,
            });

            this.loadCategories();
            this.loadProducts();

            if (id) {
                this.loadEntity(id);
                return;
            }

            // Create mode
            this.blog = this.blogRepository.create();  
            
            
            this.blog.products = new Shopware.Data.EntityCollection(
                '/product',
                'product',
                Shopware.Context.api,
                new Criteria(),
                []
            );   
        },

        async loadEntity(id) {            
            this.isLoading = true;   
            const blogCriteria = new Criteria(1, 1);
            blogCriteria.addAssociation('blogCategories');
            blogCriteria.addAssociation('products');       

            const [
                blogResponse,
                customFieldResponse,
            ] = await Promise.allSettled([
                this.blogRepository.get(id, Shopware.Context.api, blogCriteria, { languageId: this.languageId }),                
                this.customFieldSetRepository.search(this.customFieldSetCriteria), 
            ]);

            if (blogResponse.status === 'fulfilled') {
                this.blog = blogResponse.value;
            }
            console.log(this.blog)
            if (customFieldResponse.status === 'fulfilled') {
                this.customFieldSets = customFieldResponse.value;
            }

            if (blogResponse.status === 'rejected' || customFieldResponse.status === 'rejected') {
                this.createNotificationError({
                    message: this.$tc('global.notification.notificationLoadingDataErrorMessage'),
                });
            }

            this.isLoading = false;

            Shopware.ExtensionAPI.publishData({
                id: 'swag-blog-detail__blog',
                path: 'blog',
                scope: this,
            });
        },

        abortOnLanguageChange() {
            return this.blogRepository.hasChanges(this.blog);
        },

        saveOnLanguageChange() {
            return this.onSave();
        },

        onChangeLanguage() {
            this.loadEntity(this.blog.id);
        },

        onSave() {            
            this.isLoading = true;

            console.log("Saving blog...", this.blog);
            // this.blog.release_date = new Date(this.blog.release_date).toISOString();
            this.blogRepository
                .save(
                        this.blog, 
                        Shopware.Context.api,
                        { languageId: this.languageId })
                .then(() => {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;                   
                    if (this.blogId === null) {
                        this.$router.push({
                            name: 'swag.blog.detail',
                            params: { id: this.blog.id },
                        });
                        return;
                    }

                    this.loadEntity(this.blog.id);
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
            this.$router.push({ name: 'swag.blog.list' });
        },

        onChange(categoryCollection)
        {
            this.blog.blogCategories = categoryCollection;
        },

        onProductsChange(productCollection) {
            this.blog.products = productCollection;          
        }
    }
});
