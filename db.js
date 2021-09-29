const Pool=require("pg").Pool;

const pool = new Pool ({
    user : "postgres",
    password : "7388689054",
    host : "host.docker.internal",
    port : 5432,
    database : "productsdb"
});

module.exports=pool;
