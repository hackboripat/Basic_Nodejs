const express = require('express');
const app = express();
const router = require('./routes/myRouter')

//อ้างอิงตำแหน่งไฟล์

app.use(router);

app.listen(8080,()=>{
    console.log("รัน server ที่ port 8080");
})


