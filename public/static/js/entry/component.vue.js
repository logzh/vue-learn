var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

Vue.http.interceptors.push((request, next)  => {

  // modify request
  // resquest.method = 'POST';

  console.log(request);
  // continue to next interceptor
  next((response) => {

    // modify response
    // response.data = '...';
    console.log(response);
  });
});

var ComponentA = require('../../component/ComponentA.vue');

new Vue({
  el: 'body',
  data:{
    msg:'123'
  },
  methods:{
    'clickHandle': function(aa) {
      alert(aa)
    }
  },
  components: {
    'component-a': ComponentA
  }
});