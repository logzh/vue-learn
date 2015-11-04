var Vue = require('vue');

var vm = new Vue({
    el: '#demo',
    data: {
        message: 'Hello Vue.js!'
    }
});

var App = require('./component/app.vue');

new Vue({
    el: 'body',
    components: {
        app: App
    }
});