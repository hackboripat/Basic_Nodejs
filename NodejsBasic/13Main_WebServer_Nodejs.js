const http = require('http')

http.createServer((req,res)=>{

    const myhtml =`
    <h1>Hello Node.js and Boripat Maitree !!</h1>
    <p>kongruksiam studio | 2023</p>
    `

    res.write(myhtml)
    res.end()

}).listen(8080,'localhost',()=>{

    console.log("Start server in port 8080")

})