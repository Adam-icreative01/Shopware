import template from './sw-cms-block-custom-image-text-horizontal.html.twig';
import './sw-cms-block-custom-image-text-horizontal.scss';

Shopware.Component.register('sw-cms-block-custom-image-text-horizontal', {
    template,

    compactConfig: Shopware.compatConfig
});