var Vue = require('vue');
Vue.use(require('vue-resource'));

var vm = new Vue({
  el: '#demo',
  data: {
    message: 'Hello Vue.js!'
  }
});

var App = require('../component/ComponentA.vue');

new Vue({
  el: 'body',
  components: {
    app: App
  }
});