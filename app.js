require('dotenv').config();


const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", apiRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
