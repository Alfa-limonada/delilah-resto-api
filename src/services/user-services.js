var express = require('express');
var router = express.Router();
const sequelize = require("../config/database/connect-database")
const config = require("./environments/" + ENVIRONMENT).config;

const apiBaseUrl = config.apiBaseUrl //http://localhost:" + this.port + "/api/v1/




sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
.then((info)=>{
  const users = info; 
  console.log(users)
})
.catch(err => {
  console.error('unable to make query', err);
});

