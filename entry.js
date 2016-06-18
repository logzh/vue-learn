var path = require('path');

module.exports = {
  'component': [path.resolve(__dirname, 'public/static/js/entry/component.vue.js')],
  'nested': [path.resolve(__dirname, 'public/static/js/entry/nested.js')],
  // 'static/js/route.index': [path.resolve(__dirname, 'public/static/js/route/index.js')],
  // 'static/js/route.nested': [path.resolve(__dirname, 'public/static/js/route/nested.js')],
  // 'static/js/route.address': [path.resolve(__dirname, 'public/static/js/route/address.js')],
  'index': [path.resolve(__dirname, 'public/static/js/entry/index.js')]
};
