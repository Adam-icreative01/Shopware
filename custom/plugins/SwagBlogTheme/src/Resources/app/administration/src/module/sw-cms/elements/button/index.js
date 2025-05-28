import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'button',
    label: 'Read More',
    component: 'sw-cms-el-button',
    configComponent: 'sw-cms-el-config-button',
    previewComponent: 'sw-cms-el-preview-button',
    // defaultConfig: {
    //     dailyUrl: {
    //         source: 'static',
    //         value: ''
    //     }
    // }
});