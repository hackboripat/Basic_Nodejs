const express = require('express');
const path = require('path');
const router = require('./routes/myRouter2');
const app = express();

app.use(router)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public2')));

app.listen(8080,()=>{
    console.log("รัน server ที่ port 8080");
})


