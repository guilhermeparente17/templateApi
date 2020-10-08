var knex = require("knex")({
    client: 'mysql2',
    connection: {
        host: "ip",
        user: "usuarios",
        password: "senha",
        database: "nome da tabela"
    }
});

module.exports = knex;