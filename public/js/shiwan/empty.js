/**
 * Created by spencezhang on 2015/10/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TrialEmpty from '../component/trial-empty';

let mountNode = document.getElementById('example');
let element = React.createElement(TrialEmpty);
ReactDOM.render(element, mountNode);