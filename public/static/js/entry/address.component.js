var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(require('vue-resource'));
Vue.use(VueRouter);

var App = require('../../component/App.vue');
var Q = require('../../component/Q.vue');
var AddressList = require('../../component/AddressList.vue');
var Address = require('../../component/Address.vue');

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
    component: AddressList
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