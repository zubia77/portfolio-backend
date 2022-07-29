import mongoose from "mongoose";

const portfolioSkillsSchema = new mongoose.Schema({
    title: String,
    url: String,
    img: String,
    github: String,
});

export const PortfolioSkills = mongoose.model("skills", portfolioSkillsSchema);