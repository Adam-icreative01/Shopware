import template from './sw-cms-el-dailymotion.html.twig';
import './sw-cms-el-dailymotion.scss';

Shopware.Component.register('sw-cms-el-dailymotion', {
    template, 

    mixins: [
        'cms-element'
    ],

    computed: {
        dailyUrl() {
            return `https://www.dailymotion.com/embed/video/${this.element.config.dailyUrl.value}`;
        }
    }, 

    created() {
        // console.log("here", this.element.config.dailyUrl.value);
        this.createdComponent();
    },

    methods : {
        createdComponent() {
            this.initElementConfig('dailymotion');
        }
    }
});