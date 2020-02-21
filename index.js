const express = require('express');
const morgan = require('morgan');
const {mongoose} = require('./mongodb');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.listen(3000 , (err)=>{

    if(err) throw err;

    console.log('Listen On Port 3000');

});