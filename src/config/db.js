const Pool = require('pg').Pool;
const pool = new Pool({
    username: 'api_user',
    host: 'localhost',
    password: 'secret',
    database: 'events_api',
    port: 5432,
})

class Database {
    query(text, params) {
        return pool.query(text, params);
    }
}

module.exports = new Database();