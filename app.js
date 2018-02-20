//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to db
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', ()=>{
    console.log('connected to DB');
});

mongoose.connection.on('err', (err)=>{
    if(err)
    {
        console.log('Error in DB: '+err);
    }
});

//server port
const port = 3000;

//cors
app.use(cors());

//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);

app.get('/',(req, res)=>{
    res.send('footbar');
});

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});

