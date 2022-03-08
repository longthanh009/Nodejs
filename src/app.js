const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.get("/",(req,res) =>{
    res.send("<h1>Home Page</h1>")
})
app.get("/api/products" ,(req,res) =>{
    const data = [
                    {id: 1 , name : "Product1"},
                    {id: 2 , name : "Product2"}
                ];
    res.json(data)
})
app.get("/user",() =>{

})
app.listen(PORT,() =>{
    console.log("Bạn đang chạy cổng",PORT);
})

// const http = require('http');

// const server = http.createServer((req, res) =>{
//     const url = req.url;
//     console.log(url);
//     if (url === "/api/products") {
//         const data = [
//             {id: 1 , name : "Product1"},
//             {id: 2 , name : "Product2"}
//         ];
//         console.log("API products");
//         res.end(JSON.stringify(data))
//     } else {
//         console.log("Home Page");
//         res.setHeader("Content-Type","text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }
// })
// const PORT = 3001;
// server.listen(PORT,() =>{
//     console.log("Bạn đang chạy cổng",PORT);
// })