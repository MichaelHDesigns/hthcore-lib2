/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var hthcore = require('../../index.js');
var Script = hthcore.Script;
var Transaction = hthcore.Transaction;
var sighash = Transaction.sighash;

var vectors_sighash = require('../data/sighash.json');

describe('sighash', function () {
  vectors_sighash.forEach(function (vector, i) {
    if (i === 0) {
      // First element is just a row describing the next ones
      return;
    }
    it(
      'test vector from bitcoind #' +
        i +
        ' (' +
        vector[4].substring(0, 16) +
        ')',
      function () {
        var txbuf = Buffer.from(vector[0], 'hex');
        var scriptbuf = Buffer.from(vector[1], 'hex');
        var subscript = Script(scriptbuf);
        var nin = vector[2];
        var nhashtype = vector[3];
        var sighashbuf = Buffer.from(vector[4], 'hex');
        var tx = new Transaction(txbuf);

        //make sure transacion to/from buffer is isomorphic
        var actual = tx.uncheckedSerialize();
        var expected = txbuf.toString('hex');
        actual.should.equal(expected);

        //sighash ought to be correct
        sighash
          .sighash(tx, nhashtype, nin, subscript)
          .toString('hex')
          .should.equal(sighashbuf.toString('hex'));
      }
    );
  });
});
