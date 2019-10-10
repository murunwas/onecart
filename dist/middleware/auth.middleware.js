'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authenticateToken;
exports.generateAccessToken = generateAccessToken;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

/**
 * @param  {} user
 */
function generateAccessToken({ username, id }) {
  return _jsonwebtoken2.default.sign({ username, id }, process.env.JWT_SECRET, { expiresIn: '15m' });
}