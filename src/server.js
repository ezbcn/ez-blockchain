import express from 'express'

import index from './api/routes/index.js'
import eth from './api/routes/eth.js'

export const createServer = async() => {
    const app = express();
    app.use('/', index);
    app.use('/eth/', eth);
    app.listen(process.env.PORT, process.env.IP);
    return app
}
