
import template from './swag-blog-category-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('swag-blog-category-list', {
    template, 
    inject : [
        'repositoryFactory'
    ],

    data () {
        return {
            blogCategories: null,              
        }
    },

    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },

    created() {
        this.createComponent();
    },

    computed: {
        columns() {
            return [
                {
                    property: 'name',                
                    label: 'Name',
                    routerLink: 'swag.blog.category.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                }
            ]
        },

        blogCategoryRepository() {
            return this.repositoryFactory.create('blog_category');
        },

        blogCategoryCriteria () {
            const criteria = new Criteria();
            return criteria;
        }
    },

    methods: {
        onChangeLanguage(languageId) {
            this.createComponent(languageId);
        },

        async createComponent() {
            const criteria = this.blogCategoryCriteria;
            this.repository = this.repositoryFactory.create('blog_category');
            this.repository.search(criteria, Shopware.Context.api).then(response => {
                this.blogCategories = response;
            });
        },        
    },
})