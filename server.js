// import express from dependencies in package.json
const express = require('express');
const server = express();
// telling express that we will be exchanging data in json format
server.use(express.json());

const port = 8000;
server.listen(port,() => {
    console.log(`Server running and listening at port ${port}`)
})
