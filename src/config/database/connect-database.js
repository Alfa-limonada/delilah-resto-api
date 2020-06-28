const { Sequelize, QueryTypes } = require('sequelize');
const { dbConfig } = require("../environments/development").config;

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user, 
    dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
}
);

sequelize
  .authenticate()
  .then(() => {    
    console.log('Connection has been established successfully.')        
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // sequelize.sync({ force: false })
  //   .then(() => { console.log(`Base de datos y tablas sincronizadas!`) })
  //   .catch((error) => {
  //       console.log(`No se ha podido sincronizar, error: ${error}`)
  //   });
  

    module.exports = sequelize;  
     
