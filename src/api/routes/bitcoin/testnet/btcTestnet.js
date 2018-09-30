import https from 'https';
import express from 'express'

const ethMainnetRoute = express.Router()

ethMainnetRoute.get('/getbalance/:walledId', (req, res) => {
    try {

        console.log('OK');

        var request = require('request');
        var options = {
        };

        request.get('https://api.blockcypher.com/v1/btc/test3/addrs/' + req.params.walledId, options,
            (err, resp, body) => {


            var btcBalance = JSON.parse(resp.body);
                var response = {
                    network: 'bitcoin testnet',
                    walletId: req.params.walledId,
                    balance: btcBalance.balance,
                    date: new Date()
                };

                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));

            }).on("error", (err) => { console.log("Error: " + err.message); });
    }
    catch (e) {
        console.log('error');
        res.status(400).send("La dirección ingresada no es una dirección válida.");
    }
})

export default ethMainnetRoute
