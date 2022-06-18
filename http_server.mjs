import http from "http"
const server = http.createServer((req, res)=>{
    if (req.method === "POST"){
        req.addListener("data",(data)=>{
            res.setHeader("Content-Type","application/json")
            res.write(data)
            res.end()
        })
    }else {
        res.write("Hello World")
        res.end()
    }
})

server.listen(3000)