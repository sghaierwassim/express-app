const express = require("express");

const app = express();

const hbs = require('hbs');

app.set("view engine","hbs");

const verifTime = (req,res,next)=>{
    let requestDate = new Date();
    let hours = requestDate.getHours();
    if (hours>17 || hours<8) {
        console.log(hours)
        res.send('<center><h1>Our office is not open now !!</h1></center>')
    }else{  
        next();
    }
};

app.use(express.static('public'));

app.get('/home',verifTime,(req,res)=>{
    res.render(`${__dirname}/public/index.hbs`);
})

app.get('/contact',verifTime,(req,res)=>{
    res.render(`${__dirname}/public/contact.hbs`);
})

app.get('/service',verifTime,(req,res)=>{
    res.render(`${__dirname}/public/ourservice.hbs`);
})

app.listen(3030,err=>{
    if(err) console.log(err);
    else console.log("Server is running");
})