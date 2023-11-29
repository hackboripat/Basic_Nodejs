const http = require('http')
const fs = require('fs')
const url = require('url')

const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`,`utf-8`)
const productpage1 = fs.readFileSync(`${__dirname}/templates/product1.html`,`utf-8`)
const productpage2 = fs.readFileSync(`${__dirname}/templates/product2.html`,`utf-8`)
const productpage3 = fs.readFileSync(`${__dirname}/templates/product3.html`,`utf-8`)



http.createServer((req,res)=>{

    const {pathname,query} = url.parse(req.url,true)
    console.log(pathname)

    if(pathname === "/" || pathname ==="/home")
    {
        res.end(indexpage)

    }else if(pathname === "/product"){

        if(query.id === "1"){

            res.end(productpage1)

        }else if(query.id === "2"){

            res.end(productpage2)

        }else if(query.id === "3"){

            res.end(productpage3)

        }else{
            res.writeHead(404)
            res.end("<h1>Not Fount</h1>")
        }

    }else{
        res.writeHead(404)
        res.end("<h1>Not Fount</h1>")
    }


}).listen(8080,'localhost',()=>{

    console.log("Start server in port 8080")

})