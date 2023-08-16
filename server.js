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

// Helper function to calculate risk rating
function calculateRiskRating(claimHistory) {
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];
    let count = 0;

    keywords.forEach(keyword => {
        const regex = new RegExp(keyword, 'gi');
        const matches = claimHistory.match(regex);
        if (matches) {
            count += matches.length;
        }
    });

    // Clamp the value between 1 and 5
    return Math.min(Math.max(count, 1), 5);
}

// API Endpoint 2
server.post('/api/risk-rating', (req, res) => {
    const claimHistory = req.body.claim_history;

    if (typeof claimHistory !== 'string' || claimHistory.length === 0) {
        return res.json({ error: "there is an error" });
    }

    const riskRating = calculateRiskRating(claimHistory);
    res.json({ risk_rating: riskRating });
});

// Helper function to calculate premiums
function calculatePremiums(carValue, riskRating) {
    const yearlyPremium = (carValue * riskRating) / 100;
    const monthlyPremium = yearlyPremium / 12;
    
    return {
        monthly_premium: monthlyPremium,
        yearly_premium: yearlyPremium
    };
}

// API Endpoint 3
server.post('/api/quote', (req, res) => {
    const carValue = parseFloat(req.body.car_value);
    const riskRating = parseInt(req.body.risk_rating);

    if (isNaN(carValue) || isNaN(riskRating) || riskRating < 1 || riskRating > 5) {
        return res.json({ error: "there is an error" });
    }

    const premiums = calculatePremiums(carValue, riskRating);
    res.json(premiums);
});

const port = 8000;
server.listen(port,() => {
    console.log(`Server running and listening at port ${port}`)
})
