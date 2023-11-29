function calulate(x,y,callback)
{
    setTimeout(()=>{
        const sum = x+y
        callback(sum)
    },3000)
    
}

const sum = calulate(100,50,function(result){
    console.log(`ผลบวก = ${result}`)
})
