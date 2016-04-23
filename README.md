# vue-wwq
wwq components built with Vue.js

## How to use

```
npm start
```

## 笔记
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