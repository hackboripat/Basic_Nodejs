const http = require('http')

http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url = ",pathName)
    if(pathName === "/" || pathName ==="/home")
    {

        res.end("<h1>Hello Homepage !!</h1>")

    }else if(pathName === "/product"){

        res.end("<h1>Hello product !!</h1>")

    }else{
        res.writeHead(404)
        res.end("<h1>Not Fount</h1>")
    }


}).listen(8080,'localhost',()=>{

    console.log("Start server in port 8080")

})