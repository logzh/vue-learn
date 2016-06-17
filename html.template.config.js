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
    title: 'index',
    filename: 'component.html',
    template: 'html!./template/component.vue.html',
    chunks: ['vendor', 'component']
  }
];

var pro = [
  {
    title: 'Angular-Webpack',
    filename: 'index.html',
    template: proTemplate,
    chunks: ['vendor', 'index']
  }
];

module.exports = {
  dev: dev,
  pro: pro
};