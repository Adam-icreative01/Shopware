import deDE from '../../snippet/de-DE.json';
import enGB from '../../snippet/en-GB.json';
import './page/swag-blog-category-list';
import './page/swag-blog-category-detail';

const { Module } = Shopware;

// Shopware.Component.register('swag-blog-category-list', () => import('./page/swag-blog-category-list'));

export default Module.register('swag-blog-category', {
    type: 'plugin',
    name: 'Blog Category',
    version: '1.0.0',
    title : 'swag-blog-category.general.mainMenuItemGeneral',
    description: 'swag-blog-category.general.descriptionTextModule',
    color: '#ff3d58',
    // icon: 'default-object-books',
    entity: 'blog_category',

    snippets : {
        'de-DE' : deDE,
        'en-GB' : enGB
    }, 

    routes : {       
        list : {
            component : 'swag-blog-category-list',
            path: 'list'
        },
        create : {
            component : 'swag-blog-category-detail',
            path: 'create',
            meta: {
                parentPath : 'swag.blog.category.list',
                privileges: ['swag.blog.category.create']
            }
        },

        detail: {
            component : 'swag-blog-category-detail',
            path: 'detail/:id',
            meta: {
                parentPath : 'swag.blog.category.list',
                privileges: ['swag.blog.category.detail']
            },
            props: {
                default (route) {
                    return { id: route.params.id }
                }
            }
        }
    },

    navigation : [{
        label : 'swag-blog-category.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'swag.blog.category.list',
        // icon: 'default-object-books',
        parent: 'sw-catalogue',
        position: 100
    }]
});