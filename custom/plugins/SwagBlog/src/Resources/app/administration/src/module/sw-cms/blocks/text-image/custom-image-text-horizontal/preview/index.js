import template from './sw-cms-preview-custom-image-text-horizontal.html.twig';
import './sw-cms-preview-custom-image-text-horizontal.scss';

Shopware.Component.register('sw-cms-preview-custom-image-text-horizontal', {
    template,
    
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        }
    }
});