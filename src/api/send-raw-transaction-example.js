const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/95cf80f107e6402ea79805bf72b84d5f'))
const Utils = require('web3-utils')


var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('cbd2aa9bb5af213f086e6ec77cabee89da89cb68013788be1697bd628257389e', 'hex')
const addressFrom = '0xA0565713B7fF8bc2E8234eB3408DDA384D3e8220'
const addressTo = '0xEC40dBe92f7Af4Bd0B2b748a2027B0313ac10116'

web3.eth.getTransactionCount(addressFrom, 'latest', function(err, current) {
 var rawTx = {
  nonce: Utils.toHex(current.toString()),
  gasPrice: Utils.toHex('120000'),
  gasLimit: Utils.toHex('120000'),
  to: addressTo,
  value: Utils.toHex(Utils.toWei('10000', 'Gwei')),
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
 }

 var tx = new Tx(rawTx);
 tx.sign(privateKey);
 var serializedTx = tx.serialize();
 web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
  if (!err)
   console.log(hash);
 });
});
