// Non-Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
fs.readFile("myFile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด",err)
    console.log(data)
})

console.log("จบการทำงาน")