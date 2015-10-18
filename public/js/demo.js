/**
 * Created by spencezhang on 2015/10/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component/share-mask';

import util from './util';
import $ from './lib/zepto.js';

console.log(util.isWeiXin());
let props = JSON.parse(document.getElementById('props').innerHTML);
let mountNode = document.getElementById('example');
let element = React.createElement(Component, props);
ReactDOM.render(element, mountNode);