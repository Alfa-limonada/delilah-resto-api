const sequelize = require("../config/database/connect-database")
var express = require('express');
var router = express.Router();

sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
.then((info)=>{
  const users = info; 
  console.log(users)
})
.catch(err => {
  console.error('unable to make query', err);
});

