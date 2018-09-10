import express from 'express'
import index from '../routes/index.js'

export const createServer = async() => {
    const app = express();
    app.use('/', index);
    app.listen(process.env.PORT, process.env.IP);
    return app
}
