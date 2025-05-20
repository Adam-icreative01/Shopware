// <plugin root>/src/Resources/app/administration/src/module/swag-blog/index.js
import deDE from '../../snippet/de-DE.json';
import enGB from '../../snippet/en-GB.json';
import './page/swag-blog-list';
import './page/swag-blog-detail';

const { Module } = Shopware;

export default Module.register('swag-blog', {
    type: 'plugin',
    name: 'Blog',
    version: '1.0.0',
    title : 'swag-blog.general.mainMenuItemGeneral',
    description: 'swag-blog.general.descriptionTextModule',
    color: '#ff3d58',
    entity: 'blog',    

    snippets : {
        'de-DE' : deDE,
        'en-GB' : enGB
    }, 

    routes : {       
        list : {
            component : 'swag-blog-list',
            path: 'list'
        },      
        create : {
            component : 'swag-blog-detail',
            path: 'create',
            meta: {
                parentPath: 'swag.blog.list',
                privileges: ['swag.blog.create']
            }
        },
        detail : {
            component : 'swag-blog-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'swag.blog.list',
                privileges: ['swag.blog.detail']
            },
            props: {
                default (route)  {
                    return { id: route.params.id }
                }
            }
        }  
    },

    navigation : [{
        label : 'swag-blog.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'swag.blog.list',
        // icon: 'default-shopping-paper-bag-product',
        parent: 'sw-catalogue',
        position: 90
    }]
});