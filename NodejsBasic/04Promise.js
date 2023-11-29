
// สร้าง Promise

const connet = false // เช็คว่าต่อเน็ต
const url1 = "kong.dev/filel1.json"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลด ${url}`)
        setTimeout(() => {
            if(connet)
            {
                resolve(`โหลด ${url} เสร็จสิ้น`)
            }else
            {
                reject(`เกิดข้อผิดพลาด`)
            }
        }, 3000);
    })
}

downloading(url1).then(result => {
    console.log(result)
}).catch(err =>{
    console.log(err)
}).finally(()=>{
    console.log("เสร็จสิ้น")
})