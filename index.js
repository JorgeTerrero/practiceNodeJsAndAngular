const express = require('express');
const morgan = require('morgan');
const {mongoose} = require('./mongodb');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(require('./routes/userRoutes'));

app.listen(3000 , (err)=>{

    if(err) throw err;

    console.log('Listen On Port 3000');

});