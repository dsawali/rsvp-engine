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
        return new Promise((resolve, reject) => {
            pool.query(text, params)
              .then((res) => {
                resolve(res);
              })
              .catch((err) => {
                reject(err);
              });
        })
    }
}

module.exports = new Database();