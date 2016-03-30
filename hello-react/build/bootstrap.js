'use strict';

require('babel-polyfill');

var _babelRegister = require('babel-register');

var _babelRegister2 = _interopRequireDefault(_babelRegister);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./components/main');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _babelRegister2.default)();


_react2.default.render(_react2.default.createElement(_main.Main), document.getElementById('app'));