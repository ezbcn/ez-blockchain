import https from 'https';
import express from 'express'

const ethMainnetRoute = express.Router()

ethMainnetRoute.get('/getbalance/:walledId', (req, res) => {
    try {
        console.log('antes')
            https.get('https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD', (resp) => {

        console.log('despues')

            var balance = resp;
            var response = {
                network: 'bitcoin mainnet',
                walletId: req.params.walledId,
                balance: balance,
                date: new Date()
            };
            
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response));

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    }
    catch (e) {
        console.log('error');
        res.status(400).send("La dirección ingresada no es una dirección válida.");
    }
})

export default ethMainnetRoute
