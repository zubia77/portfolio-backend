import mongoose from "mongoose";

const portfolioPlanSchema = new mongoose.Schema({
    title: String,
    url: String,
    img: String,
});

export const PortfolioPlan = mongoose.model("plan", portfolioPlanSchema);
