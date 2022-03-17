import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from "mongoose";

import productRouter from "../src/routers/product";
import userRouter from "../src/routers/user";
import categoryRouter from "../src/routers/category";


const app = express();
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api",productRouter)
app.use("/api",userRouter)
app.use("/api",categoryRouter )
mongoose.connect("mongodb://localhost:27017/we16310")
.then(() =>{
    console.log("Database Connection Successful");
}).catch ((err) =>{
    console.log(err.message);
})
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