import express from 'express';
import productRouter from "../src/routers/product"
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api",productRouter)

const PORT = 3001;
app.listen(PORT,() =>{
    console.log("Server is running port :",PORT);
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