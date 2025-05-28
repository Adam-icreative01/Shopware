import './component'
import './preview';


Shopware.Service('cmsService').registerCmsBlock({
    name: 'custom-image-text-horizontal',
    category: 'text-image',
    label: 'Custom Image Text Horizontal !',
    component: 'sw-cms-block-custom-image-text-horizontal',
    previewComponent: 'sw-cms-preview-custom-image-text-horizontal',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',    
    },
    slots: {
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: "bundles/administration/static/img/cms/preview_camera_large.jpg",
                        source: 'default',
                    },
                },
            },
        },
        'left-button' : {
            type: 'button',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: 'Read More',
                    },
                },
            },
        },
        'left-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        `.trim(),
                    },
                },
            },
        },


        'center-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: "bundles/administration/static/img/cms/preview_mountain_large.jpg",
                        source: 'default',
                    },
                },
            },
        },
        'center-button' : {
            type: 'button',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: 'Read More',
                    },
                },
            },
        },
        'center-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        `.trim(),
                    },
                },
            },
        },


        'center-image-2': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: "bundles/administration/static/img/cms/preview_mountain_large.jpg",
                        source: 'default',
                    },
                },
            },
        },
        'center-button-2' : {
            type: 'button',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: 'Read More',
                    },
                },
            },
        },
        'center-text-2': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        `.trim(),
                    },
                },
            },
        },


        'right-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: "bundles/administration/static/img/cms/preview_plant_large.jpg",
                        source: 'default',
                    },
                },
            },
        },
        'right-button' : {
            type: 'button',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: 'Read More',
                    },
                },
            },
        },
        'right-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        `.trim(),
                    },
                },
            },
        },
    },
});