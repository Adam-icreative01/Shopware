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
                    label: 'Name',
                    routerLink: 'swag.blog.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'description',                
                    label: 'Description',                    
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'author',                
                    label: 'Author',                    
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'releaseDate',                
                    label: 'Release Date',                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'active',                
                    label: 'Active',                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'blogCategories',
                    label: 'Categories',                                                        
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'products',
                    label: 'Products',                                                        
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
                // this.blogs.release_date = 
                this.blogs = response;
            });
        },   
    }
});
