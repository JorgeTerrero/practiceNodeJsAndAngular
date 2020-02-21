const mongoose = require('mongoose');
const conectionString = 'mongodb://localhost:27017/proyect'
mongoose.connect(conectionString, {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) throw err;

    console.log('Mongo DB is On');
});

module.exports = mongoose;