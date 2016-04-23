var path = require('path');

module.exports = {
  'static/js/index': [path.resolve(__dirname, 'public/static/js/index.js')],
  'static/js/component.vue': [path.resolve(__dirname, 'public/static/js/component.vue.js')],
  'static/js/route.index': [path.resolve(__dirname, 'public/static/js/route/index.js')],
  'static/js/route.nested': [path.resolve(__dirname, 'public/static/js/route/nested.js')]
};
