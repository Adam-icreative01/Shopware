import template from './swag-blog-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('swag-blog-list', {
    template, 
    inject : [
        'repositoryFactory'
    ],
    data() {
        return {
            blogs: null,           
        };
    },
    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },
    created() {
        this.createComponent();
    },
    computed : {
        columns () {
            return [
                {
                    property: 'name',                
                    label: this.$tc('swag-blog.list.columnName'),
                    routerLink: 'swag.blog.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'description',                
                    label: this.$tc('swag-blog.list.columnDescription'),                    
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'author',                
                    label: this.$tc('swag-blog.list.columnAuthor'),                    
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'releaseDate',                
                    label: this.$tc('swag-blog.list.columnReleaseDate'),                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'active',                
                    label: this.$tc('swag-blog.list.columnActive'),                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'blogCategories',
                    label: this.$tc('swag-blog.list.columnCategories'),                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'products',
                    label: this.$tc('swag-blog.list.columnProducts'),                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                }
            ]
        },

        blogRepository () {
            return this.repositoryFactory.create('blog');
        },

        blogCriteria () {           
            const criteria = new Criteria();
            return criteria;
        }
    },
    methods: {       
        onChangeLanguage(languageId) {
            this.createComponent(languageId);
        },
        async createComponent() {
            const criteria = this.blogCriteria;
            criteria.addSorting(Criteria.sort('release_date', 'DESC'));
            criteria.addAssociation('blogCategories');
            criteria.addAssociation('products');

            this.repository = this.repositoryFactory.create('blog');
            this.repository.search(criteria, Shopware.Context.api).then(response => {            
                this.blogs = response;
            });
        },   
    }
});
