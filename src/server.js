import express from 'express'

import ethTestnet from './api/routes/etherium/testnet/ethTestnet.js'
import ethMainnet from './api/routes/etherium/mainnet/ethMainnet.js'

export const createServer = async() => {
    const app = express();

    app.use('/etherium/testnet/', ethTestnet);
    app.use('/etherium/mainnet/', ethMainnet);
    
    //Valida que la dirección sea existente
    app.use((req, res) => { res.status(404).send('Error 404 - Dirección no encontrada'); });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    return app
}
