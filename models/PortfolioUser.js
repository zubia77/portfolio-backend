import mongoose from "mongoose";

const portfolioUserSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    companyName: String,
    city: String,
    email: String,
    phonenumber: String,
    hash: String,
    accesGroups: [String],
});

export const PortfolioUser = mongoose.model('user', portfolioUserSchema);