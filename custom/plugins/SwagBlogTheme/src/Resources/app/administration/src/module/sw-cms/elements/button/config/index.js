// <plugin root>/src/Resources/app/administration/src/module/sw-cms/elements/dailymotion/config/index.js
import template from './sw-cms-el-config-button.html.twig';

Shopware.Component.register('sw-cms-el-config-button', {
    template,

    mixins: [
        'cms-element'
    ],
   
    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('button');
        },
    }
});