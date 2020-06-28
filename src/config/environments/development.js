config = {
    port: 3000,
    apiBaseUrl: "http://localhost:3000/api/v1/", //porque no funciona this.port
    //aca iría jwtkey
    dbConfig: {
        database: "delilah_resto_api",
        user: "userdelilah", //falta la h aquí!!
        password: "password",
        host: "localhost",
        dialect: "mysql",
    }
};

module.exports = {config}