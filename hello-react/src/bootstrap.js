'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Main} from './components/main';

console.log("Hello react from bootstrap");

render(React.createElement(Main), document.getElementById('app'));
