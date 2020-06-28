//sale error no manejado T_T 

const init = require("./create-database");

(async function(){
    try {
        await init.createDatabase()
        await init.createTables()
        return console.log("Success, database and tables created"); //una farsa
    } catch (err) {
        console.error("Error ==> ", err)
    }
})();

