"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setAppRoutes;

var _block = require("./block.ctrl");

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAppRoutes(app) {
  const controllers = [new _block2.default()];
  controllers.forEach(c => {
    app.use("/", c.router);
  });
}