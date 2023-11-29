
const url = "kong.dev/filel.json"

function downloading(url,callback){
    console.log(`กำลังดาวโหลด ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}

function complete(result){
    console.log(`โหลด ${result} เสร็จสิ้น`)
}

downloading(url,complete)