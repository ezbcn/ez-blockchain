import express from 'express'
import Web3 from 'web3'
const eth = express.Router()

eth.get('/:acc', (req, res) => {
    try {

        const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
        
        var account = req.url.split('/')[1];
        var balance = web3.eth.getBalance(account);
        balance = web3.toDecimal(balance);
        
        console.log(balance);
        var balanceValue = balance.toString();
        var response = {balance :balanceValue};
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));

    }
    catch (e) {
        res.status(200).send("La dirección ingresada no es una dirección válida.");
    }

})

export default eth
