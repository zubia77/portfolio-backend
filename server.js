import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PortfolioUser } from './models/PortfolioUser.js';
import { PortfolioPlan } from './models/PortfolioPlan.js';
import { PortfolioProject } from './models/PortfolioProjects.js';
import { PortfolioSkills } from './models/PortfolioSkills.js';

dotenv.config();

const MONGODB_URI =
                        process.env.MONGODB_URI || 'mongodb://localhost/portfolio';
const app = express()

const port = process.env.PORT || 3070;

mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`
        });
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Zubi\'s Portfolio</h1>')
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});