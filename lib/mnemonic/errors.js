/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';

var spec = {
  name: 'Mnemonic',
  message: 'Internal Error on hthcore-mnemonic module {0}',
  errors: [
    {
      name: 'InvalidEntropy',
      message: 'Entropy length must be an even multiple of 11 bits: {0}',
    },
    {
      name: 'UnknownWordlist',
      message: 'Could not detect the used word list: {0}',
    },
    {
      name: 'InvalidMnemonic',
      message: 'Mnemonic string is invalid: {0}',
    },
  ],
};

module.exports = require('../errors').extend(spec);
