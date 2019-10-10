"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BlockService {

  static async getAll() {
    try {
      const { data } = await _axios2.default.get("https://blockchain.info/blocks?format=json");
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getByHash(hash) {
    try {
      const { data } = await _axios2.default.get(`https://blockchain.info/rawblock/${hash}`);
      return data;
    } catch (error) {}
  }
}
exports.default = BlockService;