const user_schema = require('../database/schema').user;
const connect = require('../database/db');

class User {
    constructor() {
        connect.db.run(user_schema);
    }

    insert_user_data(user_data) {
        return new Promise ((resolve, reject) => {
            connect.db.run('INSERT INTO User (email, password, firstname, lastname) VALUES (?, ?, ?, ?)', user_data, (err) => {
                if(err) reject(err);
                else resolve('USER HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    }

    query_email_exist(email) {
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT * FROM User WHERE email = "${email.toLowerCase()}"`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }

    query_user_detail(user_id) {
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT firstname, lastname, email FROM User WHERE id = ${user_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }
}

module.exports = new User();