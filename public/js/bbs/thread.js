/**
 * Created by spencezhang on 2015/10/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Thread from '../component/thread';

import $ from 'zepto';

let props = JSON.parse(document.getElementById('props').innerHTML);
let mountNode = document.getElementById('example');
let element = React.createElement(Thread, props);
ReactDOM.render(element, mountNode);