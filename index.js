/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';

var hthcore = module.exports;

// module information
hthcore.version = 'v' + require('./package.json').version;
hthcore.versionGuard = function (version) {
  if (version !== undefined) {
    var message =
      'More than one instance of hthcore-lib found. ' +
      'Please make sure that you are not mixing instances of classes of the different versions of hthcore.';
    console.warn(message);
  }
};
hthcore.versionGuard(global._hthcore);
global._hthcore = hthcore.version;

// crypto
hthcore.crypto = {};
hthcore.crypto.BN = require('./lib/crypto/bn');
hthcore.crypto.BLS = require('./lib/crypto/bls');
hthcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
hthcore.crypto.Hash = require('./lib/crypto/hash');
hthcore.crypto.Random = require('./lib/crypto/random');
hthcore.crypto.Point = require('./lib/crypto/point');
hthcore.crypto.Signature = require('./lib/crypto/signature');
hthcore.Signer = require('./lib/crypto/signer');

// encoding
hthcore.encoding = {};
hthcore.encoding.Base58 = require('./lib/encoding/base58');
hthcore.encoding.Base58Check = require('./lib/encoding/base58check');
hthcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
hthcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
hthcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
hthcore.util = {};
hthcore.util.buffer = require('./lib/util/buffer');
hthcore.util.js = require('./lib/util/js');
hthcore.util.preconditions = require('./lib/util/preconditions');
hthcore.util.hashUtil = require('./lib/util/hashutil');
hthcore.util.merkleTree = require('./lib/util/merkletree');

// errors thrown by the library
hthcore.errors = require('./lib/errors');

// main bitcoin library
hthcore.Address = require('./lib/address');
hthcore.Block = require('./lib/block');

hthcore.MerkleBlock = require('./lib/block/merkleblock');
hthcore.QuorumEntry = require('./lib/deterministicmnlist/QuorumEntry');
hthcore.SimplifiedMNList = require('./lib/deterministicmnlist/SimplifiedMNList');
hthcore.SimplifiedMNListDiff = require('./lib/deterministicmnlist/SimplifiedMNListDiff');
hthcore.SimplifiedMNListEntry = require('./lib/deterministicmnlist/SimplifiedMNListEntry');
hthcore.BlockHeader = require('./lib/block/blockheader');
hthcore.HDPrivateKey = require('./lib/hdprivatekey.js');
hthcore.HDPublicKey = require('./lib/hdpublickey.js');
hthcore.Networks = require('./lib/networks');
hthcore.Opcode = require('./lib/opcode');
hthcore.PrivateKey = require('./lib/privatekey');
hthcore.PublicKey = require('./lib/publickey');
hthcore.Script = require('./lib/script');
hthcore.Transaction = require('./lib/transaction');
hthcore.GovObject = require('./lib/govobject');
hthcore.URI = require('./lib/uri');
hthcore.Unit = require('./lib/unit');
hthcore.Message = require('./lib/message');
hthcore.Mnemonic = require('./lib/mnemonic');
hthcore.BloomFilter = require('./lib/bloomfilter');

hthcore.ChainLock = require('./lib/chainlock/chainlock');
hthcore.InstantLock = require('./lib/instantlock/instantlock');

hthcore.ZmqMessages = {
  ChainLockSigMessage: require('./lib/zmqMessages/ChainLockSigMessage'),
};

// dependencies, subject to change
hthcore.deps = {};
hthcore.deps.bnjs = require('bn.js');
hthcore.deps.bs58 = require('bs58');
hthcore.deps.Buffer = Buffer;
hthcore.deps.elliptic = require('elliptic');
hthcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
hthcore.Transaction.sighash = require('./lib/transaction/sighash');
