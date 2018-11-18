import express from 'express'

import ethTestnet from './api/routes/ethereum/testnet/ethTestnet.js'
import ethMainnet from './api/routes/ethereum/mainnet/ethMainnet.js'

import btcTestnet from './api/routes/bitcoin/testnet/btcTestnet.js'
import btcMainnet from './api/routes/bitcoin/mainnet/btcMainnet.js'

import rskTestnet from './api/routes/rsk/testnet/rskTestnet.js'
import rskMainnet from './api/routes/rsk/mainnet/rskMainnet.js'

//TODO: implementar seguridad para acceso Nde cliente a esta API | 

export const createServer = async() => {
    const app = express();

    app.use('/ethereum/testnet/', ethTestnet);
    app.use('/ethereum/mainnet/', ethMainnet);
    
    app.use('/bitcoin/testnet/', btcTestnet);
    app.use('/bitcoin/mainnet/', btcMainnet);
    
    app.use('/rsk/testnet/', rskTestnet);
    app.use('/rsk/mainnet/', rskMainnet);
    
    //Valida que la dirección sea existente
    app.use((req, res) => { res.status(404).send('Error 404 - Dirección no encontrada'); });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    return app
}
