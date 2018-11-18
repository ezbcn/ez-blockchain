//import Web3 from 'web3'

var Web3 = require('web3');

//const testnet = 'https://ropsten.infura.io/'
const testnet = 'https://public-node.testnet.rsk.co/'; 
//const walletAddress = '0x8690F1feff62008A396B31c2C3f380bD0Ca6d8b8';
const walletAddress = '0xad60f3b013b2f1b0c10bef2c1f6c91062d0904a2';

const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
var balance = web3.eth.getBalance(walletAddress); //Will give value in.
balance = web3.toDecimal(balance);
console.log(balance);

//https:
//https:/public-node.testnet.rsk.co
//console.log(web3.eth.getBlockNumber());//.then(console.log);