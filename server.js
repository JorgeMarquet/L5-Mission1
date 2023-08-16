// import express from dependencies in package.json
const express = require('express');
const server = express();
// telling express that we will be exchanging data in json format
server.use(express.json());



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



const port = 8000;
server.listen(port,() => {
    console.log(`Server running and listening at port ${port}`)
})

//test2