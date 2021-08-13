const express = require("express");
const app = express();
const path = require("path");
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

const PORT =  8000;


app.listen(PORT, () => {
  console.log('Server is running on '+  PORT);
});
