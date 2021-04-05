    const express = require('express')
    const app = express()
    const mysql = require('mysql');
    const myConnection = require('express-myconnection');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');
    const {check, validationResult} = require('express-validator');
    
    //importing routes
    const client = require('./routes/client.route');



    //View engine and by default express will look for files in the view folder
    app.set('view engine', 'ejs');



    //Middleware to access static files e.g css, images etc. without this CANNOT access
    app.use(express.static('public'));
    app.use(myConnection(mysql, {
        host:'localhost',
        user:'root',
        password:'Sangabo1',
        port:3306,
        database:'clientdb'
    },'single'));

    //Body parser for post method
   app.use(express.urlencoded({extended:false}));
 
    
    //routes
    app.use('/',client);
   
    //Starting the server
    app.listen(3000, (err)=>{
        console.log("Connected to the server on port 3000");
    });