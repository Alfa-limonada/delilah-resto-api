const ENVIRONMENT = process.env.NODE_ENV || "development";
const config = require("./environments/" + ENVIRONMENT).config;
const connect_db = require("./database/connect-database")

const express = require("express");
const app = express();
//const apiRoutes = require("./routes/api-routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//app.use("/api", apiRoutes.initApiRoutes());

app.listen(config.port, () => {
    console.log(`App running on port ${config.port}`)
});


