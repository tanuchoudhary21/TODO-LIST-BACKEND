const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;
// setting database
const db = require("./config/mongoose");
const { port } = require("./config/mongoose");

app.use(express.urlencoded());
app.use(express.static('./views'))


// Setting up view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use( function(req,res, next){
  res.locals.req = req; 
  next();
});

app.use('/',require('./routes'));

app.listen(PORT || 5000 , () => {
  console.log('Server is running on '+  PORT);
});
