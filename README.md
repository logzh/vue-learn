# vue-wwq
wwq components built with Vue.js

## How to use

```
npm start
```

## 笔记

### Vue实例

在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子、计算属性等选项。全部的选项可以在 API 文档中查看。

### 数据绑定语法

- 插值 
  - 文本 {{mag}}  {{*msg}}
  - html {{{html}}}
  - html 属性 id="item-{{id}}"
- 绑定表达式
  - js表达式
  - 过滤器
- 指令 v-if ...

其中注意到两个指令

- v-bind 指令用于响应地更新 HTML 特性
- v-on 指令，它用于监听 DOM 事件
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>

<!-- 缩写 -->
<a :href="url"></a>

<!-- 完整语法 -->
<button v-bind:disabled="someDynamicCondition">Button</button>

<!-- 缩写 -->
<button :disabled="someDynamicCondition">Button</button>
```

```
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>

<!-- 缩写 -->
<a @click="doSomething"></a>
```
## 参考教程

- [vue-antd](https://github.com/okoala/vue-antd)
- [vue-strap](https://github.com/yuche/vue-strap)
- [vue.js 入门教程](http://segmentfault.com/a/1190000003968020)