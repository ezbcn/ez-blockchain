import express from 'express'
import Web3 from 'web3'
const ethMainnetRoute = express.Router()

ethMainnetRoute.get('/getbalance/:walledId',(req, res) => {
        try {

            console.log(req);

            const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/"));

            var balance = web3.eth.getBalance(req.params.walledId);
            var response = {
                network: 'ethereum mainnet',
                walletId: req.params.walledId,
                balance: web3.toDecimal(balance),
                date: new Date()
            };
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response));

        }
        catch (e) {

            res.status(200).send("La dirección ingresada no es una dirección válida.");

        }
    })

export default ethMainnetRoute
