config = {
    port: 3000,
    apiBaseUrl: "http://localhost:" + this.port + "/api/v1/",
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