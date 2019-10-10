"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _controllers = require("./controllers");

var _controllers2 = _interopRequireDefault(_controllers);

var _middleware = require("./middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();


const app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.static('public'));

app.get('/', (req, res) => {
  res.sendFile(_path2.default.join(__dirname, './public/index.html'));
});

(0, _controllers2.default)(app);

(0, _middleware.errorHandler)(app);

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log("running on port : " + PORT));
exports.default = app;