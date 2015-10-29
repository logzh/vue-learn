/**
 * Created by spencezhang on 2015/10/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TrialList from '../component/trial-list';

let props = JSON.parse(document.getElementById('props').innerHTML);
let mountNode = document.getElementById('example');
let element = React.createElement(TrialList, props);
ReactDOM.render(element, mountNode);