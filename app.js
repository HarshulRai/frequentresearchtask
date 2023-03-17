const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/userregister')


app.use(express.json());

app.use(cors());

app.use(homeRoutes)




mongoose.connect('mongodb://localhost:27017/registerform')
.then(()=>{
    app.listen(3000, (req, res)=>{
        console.log('running')
    })
})