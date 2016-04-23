var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

// 定义
var MyComponent = Vue.extend({
  template: '<div>A custom component! {{msg}}, {{userId}}</div>',
  props:['msg', 'userId']
})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例
new Vue({
  el: '#example',
  data:{
    msg:'from parent',
    userId:123
  }
})

//======================================================
// 注册子组件
// 将当前消息派发出去
Vue.component('child', {
  template: '#child-template',
  props: ['doFollow'],
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {//child-msg
      if (this.msg.trim()) {
        this.doFollow(this.msg);
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

// 启动父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  methods:{
    handleIt: function(msg) {
      this.messages.push(msg)
    },
    doFollow: function(msg) {
      console.log(msg)
    }
  }
  // 在创建实例时 `events` 选项简单地调用 `$on`
  // events: {
  //   'child-msg': function (msg) {
  //     事件回调内的 `this` 自动绑定到注册它的实例上
      // this.messages.push(msg)
    // }
  // }
})

//======================================================
var vm = new Vue({
  el: '#demo',
  data: {
    message: 'Hello Vue.js!'
  }
});

var vm2 = new Vue({
  el: '#list',
  data: {
    todos: [{text: '打扫房间'}, {text: '总结'}]
  }
});

var vm3 = new Vue({
  el: '#reverseTest',
  data: {
    message: '123456789'
  },
  methods:{
    reverseMsg: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var vm4 = new Vue({
  el: '#todo',
  data: {
    todos: [{text:'add some todo'}],
    newTodo:''
  },
  methods:{
    addTodo: function() {
      var text = this.newTodo.trim();
      if (text.length){
        this.todos.push({text:text});
        this.newTodo = '';
      }
    },
    removeTodo:function(index){
      this.todos.splice(index, 1);
    }
  }
});
var vm5 = new Vue({
  el: '#hook',
  data: {
    text: '123'
  },
  created: function() {
    console.log(this.text);
  }
});