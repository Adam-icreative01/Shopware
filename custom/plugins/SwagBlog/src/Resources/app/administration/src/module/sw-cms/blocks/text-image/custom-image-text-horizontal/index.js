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
    // slots: {
    //     'left-image': {
    //         type: 'image',
    //         default: {
    //             config: {
    //                 displayMode: { source: 'static', value: 'cover' },
    //             },
    //             data: {
    //                 media: {
    //                     value: "hello",
    //                     source: 'default',
    //                 },
    //             },
    //         },
    //     },
    //     'left-text': {
    //         type: 'text',
    //         default: {
    //             config: {
    //                 content: {
    //                     source: 'static',
    //                     value: `
    //                     <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
    //                     <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    //                     sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    //                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    //                     `.trim(),
    //                 },
    //             },
    //         },
    //     },
    //     'center-image': {
    //         type: 'image',
    //         default: {
    //             config: {
    //                 displayMode: { source: 'static', value: 'cover' },
    //             },
    //             data: {
    //                 media: {
    //                     value: "hello",
    //                     source: 'default',
    //                 },
    //             },
    //         },
    //     },
    //     'center-text': {
    //         type: 'text',
    //         default: {
    //             config: {
    //                 content: {
    //                     source: 'static',
    //                     value: `
    //                     <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
    //                     <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    //                     sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    //                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    //                     `.trim(),
    //                 },
    //             },
    //         },
    //     },
    //     'right-image': {
    //         type: 'image',
    //         default: {
    //             config: {
    //                 displayMode: { source: 'static', value: 'cover' },
    //             },
    //             data: {
    //                 media: {
    //                     value: "hello",
    //                     source: 'default',
    //                 },
    //             },
    //         },
    //     },
    //     'right-text': {
    //         type: 'text',
    //         default: {
    //             config: {
    //                 content: {
    //                     source: 'static',
    //                     value: `
    //                     <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
    //                     <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    //                     sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    //                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    //                     `.trim(),
    //                 },
    //             },
    //         },
    //     },
    // },

    slots: {
        'left-image': 'image',
        'left-text': 'text',
        'center-image': 'image',
        'center-text': 'text',
        'right-image': 'image',
        'right-text': 'text',
    }
});