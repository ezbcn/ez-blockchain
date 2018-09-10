import express from 'express'

export const createServer = async() => {

    const app = express();
    app.listen(process.env.PORT, process.env.IP);

    console.log('RESTful API server started on: ' + process.env.PORT);
    console.log(process.env);
    return app
}