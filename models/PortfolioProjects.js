import mongoose from "mongoose";

const portfolioProjectSchema = new mongoose.Schema({
    title: String,
    img: String,
    url: String,
    github: String,
    
});

export const PortfolioProject = mongoose.model("project", portfolioProjectSchema);