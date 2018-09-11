import express from 'express'

import index from './api/routes/index.js'
import eth from './api/routes/eth.js'

export const createServer = async() => {
    
    const app = express();
    app.use('/', index);
    app.use('/eth/', eth);
    const PORT = process.env.PORT || 5000;
    
    app.listen(PORT, () => { console.log(`Server running on ${PORT}/`); });
    return app
}