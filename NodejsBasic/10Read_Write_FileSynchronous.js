// Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
const data = fs.readFileSync('myFile/input.txt','utf-8')

console.log(data)

console.log("จบการทำงาน")

//เขียนไฟล์
const outputtext = `Hello Node.js \n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("myFile/Output.txt",outputtext)
console.log("เขียนไฟล์เสร็จสิ้น!")