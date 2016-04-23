var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

// 定义组件
var Foo = Vue.extend({
  template: '<div class="foo">' +
  '<h2>This is Foo!</h2> from data :{{msg}}' +
  '<router-view></router-view>' +
  `<a v-link="{name:'default'}">go default</a>` +
  `<a @click="$router.go({ name: 'default'})"">go default</a>` +
  '</div>'
})

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

var Baz = Vue.extend({
  template: '<p>This is baz!</p>'
})

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

router.map({
  '/': {
    // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
    // 为了简便，这里使用了一个组件的定义
    name: 'default',
    component: {
      template: '<p>Default sub view for Foo</p>'
    }
  },
  '/foo': {
    data: {
      'msg':'hello '
    },
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