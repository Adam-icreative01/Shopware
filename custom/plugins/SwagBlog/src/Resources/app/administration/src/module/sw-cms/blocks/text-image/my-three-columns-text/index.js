import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'my-three-columns-text',
    category: 'text',
    label: 'My Three Columns, text',
    component: 'sw-cms-block-my-three-columns-text',
    previewComponent: 'sw-cms-preview-my-three-columns-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: 'text',
        center: 'text',
        right: 'dailymotion',        
    }
});