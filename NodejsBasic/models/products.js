// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง moogoose
const dburl = 'mongodb://localhost:27017/productDB'
// mongoose.connect(dburl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).catch(err=>console.log(err))

mongoose.connect(dburl).then().catch((err)=>console.log(err))

//ออกแบบ schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})


//สร้างโมเดล
let Product = mongoose.model("products",productSchema);

module.exports = {};

//ส่งออกโมเดล
module.exports = Product;


//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.seveProduct = function(model,data){
    model.save(data)
};


