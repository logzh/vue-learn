var devTemplate = 'template/dev.html';
var proTemplate = 'template/pro.html';

var dev = [
  {
    title: 'index',
    filename: 'index.html',
    template: 'html!./template/index.html',
    chunks: ['vendor', 'index']
  },
  {
    title: 'component',
    filename: 'component.html',
    template: 'html!./template/component.vue.html',
    chunks: ['vendor', 'component']
  },
  {
    title: 'router-nested',
    filename: 'nested.html',
    template: 'html!./template/nested.html',
    chunks: ['vendor', 'nested']
  },
  {
    title: 'address',
    filename: 'address.html',
    template: 'html!./template/address.html',
    chunks: ['vendor', 'address']
  }
];

var pro = [
  {
    title: 'index',
    filename: 'index.html',
    template: 'html!./template/index.html',
    chunks: ['vendor', 'index']
  },
  {
    title: 'index',
    filename: 'component.html',
    template: 'html!./template/component.vue.html',
    chunks: ['vendor', 'component']
  },
  {
    title: 'router-nested',
    filename: 'nested.html',
    template: 'html!./template/nested.html',
    chunks: ['vendor', 'nested']
  },
  {
    title: 'address',
    filename: 'address.html',
    template: 'html!./template/address.html',
    chunks: ['vendor', 'address']
  }
];

module.exports = {
  dev: dev,
  pro: pro
};
