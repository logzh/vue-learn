var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

var ComponentA = require('../component/ComponentA.vue');

new Vue({
  el: 'body',
  components: {
    'component-a': ComponentA
  }
});