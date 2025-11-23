const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully");

    } catch (error) {
        console.error("DB Connection Failed");

    }
}

module.exports = connectDB;