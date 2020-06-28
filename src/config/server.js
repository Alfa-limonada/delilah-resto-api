const ENVIRONMENT = process.env.NODE_ENV || "development";
const config = require("./environments/" + ENVIRONMENT).config;
const connect_db = require("./database/connect-database")
const express = require("express");
const app = express();
const userRoutes = require("../routes/user-routes"); 
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(userRoutes);
app.listen(config.port, () => {
    console.log(`App running on port ${config.port}`)
});




