/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';
/* jshint unused: false */

var should = require('chai').should();
var expect = require('chai').expect;
var _ = require('lodash');

var hthcore = require('../../../index.js');
var Transaction = hthcore.Transaction;
var PrivateKey = hthcore.PrivateKey;
var Address = hthcore.Address;
var Script = hthcore.Script;
var Networks = hthcore.Networks;
var Signature = hthcore.crypto.Signature;

describe('PublicKeyHashInput', function () {
  var privateKey = new PrivateKey(
    'XBK4nzpDtLX1xZjoAFq7LJEAu2JgnJgqA7ZPK1eCLHd9AXSx1M6L'
  );
  var publicKey = privateKey.publicKey;
  var address = new Address(publicKey, Networks.livenet);

  var output = {
    address: '7UiEaDrcNXj1bCQJf1Yc54xkFNr8Ef4sTV',
    txId: '66e64ef8a3b384164b78453fa8c8194de9a473ba14f89485a0e433699daec140',
    outputIndex: 0,
    script: new Script(address),
    satoshis: 1000000,
  };
  it('can count missing signatures', function () {
    var transaction = new Transaction().from(output).to(address, 1000000);
    var input = transaction.inputs[0];

    input.isFullySigned().should.equal(false);
    transaction.sign(privateKey);
    input.isFullySigned().should.equal(true);
  });
  it("it's size can be estimated", function () {
    var transaction = new Transaction().from(output).to(address, 1000000);
    var input = transaction.inputs[0];
    input._estimateSize().should.equal(107);
  });
  it("it's signature can be removed", function () {
    var transaction = new Transaction().from(output).to(address, 1000000);
    var input = transaction.inputs[0];

    transaction.sign(privateKey);
    input.clearSignatures();
    input.isFullySigned().should.equal(false);
  });
  it('returns an empty array if private key mismatches', function () {
    var transaction = new Transaction().from(output).to(address, 1000000);
    var input = transaction.inputs[0];
    var signatures = input.getSignatures(transaction, new PrivateKey(), 0);
    signatures.length.should.equal(0);
  });
});
