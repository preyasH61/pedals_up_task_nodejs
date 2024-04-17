const express = require('express');
require('dotenv').config();

const server = express();

const PORT = process.env.PORT
server.use(express.json());

server.get("/", (req, res) => {
    res.send("api root path called")
});

server.get("/games", (req, res) => {
    res.send("api games called")
});

server.listen(PORT,()=>{
    console.log(`Running in the port ${PORT}`);
});
