var path = require('path');

module.exports = {
  'component': [path.resolve(__dirname, 'public/static/js/entry/component.vue.js')],
  'nested': [path.resolve(__dirname, 'public/static/js/entry/nested.js')],
  'address': [path.resolve(__dirname, 'public/static/js/entry/address.js')],
  'index': [path.resolve(__dirname, 'public/static/js/entry/index.js')]
};
