import express from 'express'

import ethTestnet from './api/routes/etherium/testnet/ethTestnet.js'
import ethMainnet from './api/routes/etherium/mainnet/ethMainnet.js'

export const createServer = async() => {
    const app = express();

    app.use('/etherium/testnet/', ethTestnet);
    app.use('/etherium/mainnet/', ethMainnet);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    return app
}
