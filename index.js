const express = require('express');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const server = express();

const PORT = process.env.PORT | 4000;
server.use(express.json());

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Max 3 requests per minute
});
  
server.use(limiter);

server.get("/", (req, res) => {
    res.send("api root path called")
});

server.get("/games", (req, res) => {
    res.send("api games called")
});

server.listen(PORT,()=>{
    console.log(`Running in the port ${PORT}`);
});