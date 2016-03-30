'use strict';

import 'babel-polyfill';

//import babelRegister from 'babel-register';
//babelRegister();

import React from 'react';
import { render } from 'react-dom';

import {Main} from './components/main';

console.log("Hello react from bootstrap");

render(React.createElement(Main), document.getElementById('app'));
