import express from 'express'

export const createServer = async() => {
    const app = express();
    app.listen(process.env.PORT, process.env.IP);
    return app
}