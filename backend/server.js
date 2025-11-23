const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const PORT_NO = 5000;
const app = express();

const connectDB = require("../backend/config/db");
const crudRoutes = require("../backend/routes/crudRoutes");

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use("/api", crudRoutes);

connectDB().then(() => {
    app.listen(PORT_NO, () => {
        console.log(`Server is running at port no: ${PORT_NO}`);

    })
})
