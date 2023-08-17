import express, { Request, Response } from 'express';
import { carValueCalculator } from './carValueCalculator'

const server = express();

// telling express that we will be exchanging data in json format
server.use(express.json());

// Type definitions
interface CarValueRequestBody {
    model: string;
    year: number;
}



// API 1 Endpoint
server.post('/api/car-value', (req: Request, res: Response) => {
    const body: CarValueRequestBody = req.body;
    const model: string = body.model;
    const year: number = parseInt(body.year.toString());

    if (typeof model !== 'string' || isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        return res.json({ error: "there is an error" });
    }

    const carValue: number = carValueCalculator(model, year);
    res.json({ car_value: carValue });
});

// Health check or default endpoint to verify server is running
server.get("/", (req: Request, res: Response) => {
    res.send("Server is up and running!");
});

const port: number = 8000;
server.listen(port, () => {
    console.log(`Server running and listening at port ${port}`);
});