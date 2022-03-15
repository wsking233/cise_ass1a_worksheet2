const express = require("express");

const articles = require("./dummydata/articles");

const server = express();

server.get('./', (req,res)=>{
    res.send("API is running")
});

server.get('./api/articles', (req,res)=>{
    res.json(articles)
});

server.listen(5000, console.log("server is working and listening PORT 5000"));