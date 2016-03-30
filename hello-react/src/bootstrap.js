'use strict';

import 'babel-polyfill';
import babelRegister from 'babel-register';
babelRegister();
import React from 'react';
import {Main} from './components/main';

React.render(React.createElement(Main), document.getElementById('app'));
