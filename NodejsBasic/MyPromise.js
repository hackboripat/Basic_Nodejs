
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
        }, 2000);
    })
}

//Async & Await

async function start(){

    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
}

start()


//Promise then

// downloading(url1).then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// }).then(function(result){
//     console.log(result)
//     return downloading(url4)
// }).then(function(result){
//     console.log(result)
//     return downloading(url5)
// }).then(function(result){
//     console.log(result)
// })

