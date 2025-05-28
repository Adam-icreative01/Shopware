import template from './sw-cms-el-preview-button.html.twig';
import './sw-cms-el-preview-button.scss';

Shopware.Component.register('sw-cms-el-preview-button', {
    template,

    compatConfig: Shopware.compatConfig,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    },
});