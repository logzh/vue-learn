var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

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

var ComponentA = require('../component/ComponentA.vue');

new Vue({
  el: 'body',
  components: {
    'component-a': ComponentA
  }
});