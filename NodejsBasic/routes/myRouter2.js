const express = require('express');
const router = express.Router();

const Product = require('../models/products');


//อัพโหลดไฟล์
const multer = require('multer');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public2/images/products')    //ตำแหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".png") //เปลื่ยนชื่อไฟล์ปัองกันมันซํ้ากัน
    }
})


const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
    try {
        Product.find().then((doc)=>{
            res.render('index',{products:doc})
        })
        // .catch((err) => {
        //     console.log(err)
        //     // catch error
        // });
    } catch (error) {
        console.log(err)
    }
    

})

router.get('/add_product',(req,res)=>{
    
    res.render('form');
})

router.get('/manage',(req,res)=>{

    Product.find().then((doc)=>{
        res.render('manage',{products:doc})
    }).catch((err) => {
        //catch error
    });

})

router.get('/delete/:id',(req,res)=>{

    console.log("Delete ID",req.params.id)
    Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).then(err=>{

        if(err) console.log(err)
        res.render('manage')

    })
    // Product.find().then((doc)=>{
    //     res.render('manage',{products:doc})
    // }).catch((err) => {
    //     //catch error
    // });

})

router.post('/insert',upload.single("image"),(req,res)=>{
// console.log(req.file)
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })

    
    try{
        Product.seveProduct(data)
    }catch(err){
        console.log(err)
    }
    res.redirect('/')

})

router.get('/:id',(req,res)=>{
    const product_id = req.params.id
    Product.findOne({_id:product_id}).then((doc,err)=>{
        res.render('product',{products:doc});
    })
    
})

router.post('/edit',(req,res)=>{
    const edit_id = req.body.edit_id
    Product.findOne({_id:edit_id}).then((doc,err)=>{
        // res.render('product',{products:doc});
        // console.log(doc)

        //นำข้อมูลเดิมที่ต้องการแก้ไข ไปแสดงในแบบฟอร์ม
        res.render('edit',{products:doc});
    })
})

router.post('/update',(req,res)=>{
    // console.log(req.file)
    const update_id = req.body.update_id
    let data = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
    Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).then(()=>{
        res.redirect('/manage');
    })
    
})


module.exports = router;