// import express from dependencies in package.json
const express = require('express');
const server = express();
// telling express that we will be exchanging data in json format
server.use(express.json());


// Helper function to calculate car value
function calculateCarValue(model, year) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    
    let total = 0;
    for (let char of model.toLowerCase()) {
        const index = alphabets.indexOf(char);
        if (index !== -1) {
            total += (index + 1);
        }
    }

    return (total * 100) + year;
}

// API 1 Endpoint
server.post('/api/car-value', (req, res) => {
    const model = req.body.model;
    const year = parseInt(req.body.year);

    if (typeof model !== 'string' || isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        return res.json({ error: "there is an error" });
    }

    const carValue = calculateCarValue(model, year);
    res.json({ car_value: carValue });
});

server.get("./", (req, res) => {
    
})


const port = 8000;
server.listen(port,() => {
    console.log(`Server running and listening at port ${port}`)
})

//test2