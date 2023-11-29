// Non-Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
fs.readFile("myFile/input.txt",'utf-8',(err,data)=>{

    if(err) return console.log("เกิดข้อผิดพลาด",err)

    const outputText = `Hello Node.js\n${data}\nไฟลถูกเขียนเมื่อ ${Date()}`

    fs.writeFile("myFile/Output2.txt", outputText , err=>{
        if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เสร็จสิ้น")
    })

})