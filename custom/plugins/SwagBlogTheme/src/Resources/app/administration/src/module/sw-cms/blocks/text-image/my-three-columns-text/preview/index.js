import template from './sw-cms-preview-my-three-columns-text.html.twig';
import './sw-cms-preview-my-three-columns-text.scss';

Shopware.Component.register('sw-cms-preview-my-three-columns-text', {
    template, 

    computed: {
        assetFilter () {
            return Shopware.Filter.getByName('asset');
        }
    }
});