"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require("./auth.middleware");

Object.defineProperty(exports, "authenticateToken", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_auth).default;
  }
});
Object.defineProperty(exports, "generateAccessToken", {
  enumerable: true,
  get: function () {
    return _auth.generateAccessToken;
  }
});

var _errorHandler = require("./errorHandler");

Object.defineProperty(exports, "errorHandler", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_errorHandler).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }