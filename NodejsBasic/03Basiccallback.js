const url1 = "kong.dev/filel1.json"
const url2 = "kong.dev/filel2.json"
const url3 = "kong.dev/filel3.json"

function downloading(url,callback){
    console.log(`กำลังดาวโหลด ${url}`)
    setTimeout(()=>{
        callback(url)
    },5000)
}

// CallBack Hell
downloading(url1,function(result){
    console.log(`โหลด ${result} เสร็จสิ้น`)
    downloading(url2,function(result){
        console.log(`โหลด ${result} เสร็จสิ้น`)
        downloading(url3,function(result){
            console.log(`โหลด ${result} เสร็จสิ้น`)
        })
    })
})