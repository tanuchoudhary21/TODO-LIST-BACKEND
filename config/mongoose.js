const mongoose= require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db= mongoose.connection;
db.on('error',console.error.bind(console,'error connecting'));

db.once('open',function(){
    console.log('connected to databse: MongoDB')
});

module.exports=db;