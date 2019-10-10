'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use((req, res, next) => {
    return res.status(404).send({ message: 'Not found.' });
  });
  app.use((error, req, res, next) => {
    return res.status(500).send({ message: 'Something went wrong!!!', error });
  });
};