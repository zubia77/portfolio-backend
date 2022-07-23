import mongoose from "mongoose";

const portfolioSkillsSchema = new mongoose.Schema({
    title: String,
    url: String,
    img: String,
    github: String,
});

export const PortfolioSkillsSchema = mongoose.model("skills", portfolioSkillsSchema);