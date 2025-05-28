import template from './sw-cms-el-button.html.twig';
import './sw-cms-el-button.scss';

Shopware.Component.register('sw-cms-el-button', {
    template, 

    mixins: [
        'cms-element'
    ],
    created() {      
        this.createdComponent();
    },

    methods : {
        createdComponent() {
            this.initElementConfig('button');
        }
    }
});