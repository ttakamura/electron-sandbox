'use strict';

var _polyfill = require('babel/polyfill');

var _polyfill2 = _interopRequireDefault(_polyfill);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./components/main');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_react2.default.render(_react2.default.createElement(_main.Main), document.getElementById('app'));