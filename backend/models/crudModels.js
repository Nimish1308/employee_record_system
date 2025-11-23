const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    field: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: false
    },
},
    { timestamps: true }
)

const Emp = mongoose.model("employee", empSchema);

module.exports = Emp;