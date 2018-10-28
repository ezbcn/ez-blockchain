import express from 'express'
import Web3 from 'web3'
import Utils from 'web3-utils'


        var txhash = req.params.txid;
        
        const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
        
        var tx = web3.eth.getTransaction(txhash);
        
        asynctx.then(console.log);
        
        var response = {
            network: 'ethereum testnet',
            walletId: req.params.walledId,
            //txid: tx,
            date: new Date()
        };
        
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    }
    catch (e) {
        res.status(500).send("El id transacción ingresado no existe.");
    }
})


ethTestnetRoute.get('/sendtransaction/:to/:from/:pk/:hashdata', (req, res) => {
    try {
        const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/95cf80f107e6402ea79805bf72b84d5f"));

        console.log(req.params);

        var Tx = require('ethereumjs-tx');

        //const privateKey = new Buffer('cbd2aa9bb5af213f086e6ec77cabee89da89cb68013788be1697bd628257389e', 'hex')
        //const addressFrom = '0xA0565713B7fF8bc2E8234eB3408DDA384D3e8220'
        //const addressTo = '0xEC40dBe92f7Af4Bd0B2b748a2027B0313ac10116'

        const privateKey = new Buffer(req.params.pk, 'hex')
        const addressFrom = req.params.from
        const addressTo = req.params.to
        const hashdata = req.params.hashdata

        var response = {}

        web3.eth.getTransactionCount(addressFrom, 'latest', function(err, current) {

            console.log(current);
            var rawTx = {
                nonce: Utils.toHex((current).toString()),
                gasPrice: Utils.toHex('150000'),
                gasLimit: Utils.toHex('120000'),
                to: addressTo,
                value: Utils.toHex(Utils.toWei('70000', 'Gwei')),
                data: '0x' + hashdata
            }

            var tx = new Tx(rawTx);
            tx.sign(privateKey);
            var serializedTx = tx.serialize();
            web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
                if (!err) {
                    console.log(hash);
                    response.txId = hash;
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send(JSON.stringify(response));
                }
                else {
                    console.log(err);
                }
            });
        });
    }
    catch (e) {
        res.status(500).send("No se pudo realizar la tranasacción. Ocurrión durante el proceso: " + e.message);
    }
})

export default ethTestnetRoute
