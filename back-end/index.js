const express = require('express')
const app = express();
const InitDB = require('./models/initMongoDB')

InitDB.initMongoDB()

const port = 3000;
const attire = require('./routers/attire')

app.use('/attire', attire);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});