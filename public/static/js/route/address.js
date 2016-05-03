var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

// 定义组件
var Address = Vue.extend({
  template: '#address',
  data: function() {
    return {
      "address": [{
        "id": "11328",
        "userId": "17",
        "province": "\u5e7f\u4e1c\u7701",
        "city": "\u6df1\u5733\u5e02",
        "district": "\u5b9d\u5b89\u533a",
        "code": "",
        "region": "",
        "phoneNo": "19566232372",
        "receiver": "\u7ae0\u91d1\u534e",
        "description": "\u79d1\u5174\u79d1\u5b66\u56edC\u680b",
        "zipCode": "",
        "isDefault": "0",
        "created": "2015-11-03 17:36:25",
        "rowStatus": "0"
      }, {
        "id": "9386",
        "userId": "17",
        "province": "\u5b89\u5fbd\u7701",
        "city": "\u5b89\u5e86\u5e02",
        "district": "\u592a\u6e56\u53bf",
        "code": "23,130,1954",
        "region": "\u5b89\u5fbd\u7701,\u5b89\u5e86\u5e02,\u592a\u6e56\u53bf",
        "phoneNo": "18566232372",
        "receiver": "\u7ae0\u5148\u751f",
        "description": "\u5c0f\u6c60\u9547",
        "zipCode": "",
        "isDefault": "0",
        "created": "2015-09-22 11:23:19",
        "rowStatus": "0"
      }]
    };
  }
});

// 定义组件
var EditAddress = Vue.extend({
  template: '#edit-address',
  props:['user', 'changeNick'],
  data: function() {
    return {
      "address": {
        "id": "11328",
        "userId": "17",
        "province": "\u5e7f\u4e1c\u7701",
        "city": "\u6df1\u5733\u5e02",
        "district": "\u5b9d\u5b89\u533a",
        "code": "",
        "region": "",
        "phoneNo": "19566232372",
        "receiver": "\u7ae0\u91d1\u534e",
        "description": "\u79d1\u5174\u79d1\u5b66\u56edC\u680b",
        "zipCode": "",
        "isDefault": "0",
        "created": "2015-11-03 17:36:25",
        "rowStatus": "0"
      }
    };
  },
  ready:function(){
    console.log(this.$route)
    this.changeNick('zhang')
  }
});

// 定义组件
var Foo = Vue.extend({
  template: '#foo',
  data: function() {
    return {
      'msg': 'hello'
    };
  }
});

var Bar = Vue.extend({
  template: '#bar',
  props: ['msg'],
  ready: function() {

  },
  methods: {
    clickBar: function() {
      //this.msg = 'hhhhh';
      console.log(this)
    }
  }
});

var Baz = Vue.extend({
  template: '<p>This is baz!</p>',
  data: function() {
    return {
      'msg': 'baz'
    };
  }
});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({
  data:function(){
    return {
      user:{
        nickname:'spence'
      }
    };
  },
  methods:{
    changeNick:function(nick){
      this.user.nickname = nick;
    }
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
  'address': {
    name: 'address',
    component: Address
  },
  'edit-address/:addressId': {
    name: 'editAddress',
    component: EditAddress
  },
  '/foo': {
    component: Foo,
    // 在/foo下设置一个子路由
    subRoutes: {
      '/bar': {
        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
        // 一个Bar组件
        component: Bar
      },
      '/baz': {
        // Baz也是一样，不同之处是匹配的路由会是/foo/baz
        component: Baz
      }
    }
  }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')