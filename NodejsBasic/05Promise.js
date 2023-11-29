
// สร้าง Promise

const connet = true // เช็คว่าต่อเน็ต
const url1 = "kong.dev/filel1.json"
const url2 = "kong.dev/filel2.json"
const url3 = "kong.dev/filel3.json"
const url4 = "kong.dev/filel4.json"
const url5 = "kong.dev/filel5.json"

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

//Promise hell
downloading(url1).then(function(result){
    console.log(result)
    downloading(url2).then(function(result){
        console.log(result)
        downloading(url3).then(function(result){
            console.log(result)
        })
    })
})