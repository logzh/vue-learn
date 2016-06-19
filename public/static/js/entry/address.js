var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(require('vue-resource'));
Vue.use(VueRouter);

// 路由器需要一个根组件。
var App = Vue.extend({
  data: function() {
    return {
      selectedAddress: {
        id: 0
      }
    };
  },
  methods: {
    selectAddress: function(address) {
      this.selectedAddress = address;
      this.$router.go({ name: 'q'})
    },
    saveAddress: function(address) {
      this.selectedAddress = address;
      this.$router.go({ name: 'q'})
    }
  }
});

var Q = Vue.extend({
  template: '#q',
  props: ['selectedAddress']
});

var List = Vue.extend({
  template: '#addressList',
  props:['selectAddress'],
  data: function() {
    return {
      "items": []
    };
  },
  ready:function() {
    var self = this;
    self.$http.get('/static/json/addresses.json').then(function(response) {
      // set data on vm
      self.$set('items', response.data);
    }, function(response) {

      // handle error
    });
  }
});

var Address = Vue.extend({
  template: '#address',
  props: ['saveAddress'],
  data: function() {
    return {
      "address":{}
    };
  },
  ready:function() {

    var self = this;
    console.log(self.$route.params)
    self.$http.get('/static/json/addresses.json').then(function(response) {
      // set data on vm
      response.data.map(function(item) {
        if (item.id == self.$route.params.addressId){
          self.$set('address', item);
        }
      })

    }, function(response) {

      // handle error
    });
  }
});

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter();

router.map({
  '/': {
    name: 'default',
    component: {
      template: '<p>Default sub view for Foo</p>'
    }
  },
  '/q': {
    name: 'q',
    component: Q
  },
  '/list': {
    name: 'addressList',
    component: List
  },
  '/add': {
    name: 'addAddress',
    component: Address
  },
  '/edit/:addressId': {
    name: 'editAddress',
    component: Address
  }
});

router.redirect({
  '/': '/q'
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');