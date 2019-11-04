const db = require('../config/db');
const schema = `CREATE TABLE IF NOT EXISTS Users ( 
                    id UUID PRIMARY KEY, 
                    email TEXT NOT NULL UNIQUE, 
                    password TEXT NOT NULL, 
                    firstname TEXT NOT NULL, 
                    lastname TEXT NOT NULL
                )`;  

class User {
    constructor() {
        db.query(schema);
    }

    insert_user_data(user_data) {
        return db.query(`INSERT INTO Users (id, email, password, firstname, lastname) VALUES ($1, $2, $3, $4, $5)`, user_data);
    }

    query_email_exist(email) {
        return db.query(`SELECT * FROM Users WHERE email = $1`, [email.toLowerCase()]);
    }

    query_user_detail(user_id) {
        return db.query(`SELECT * FROM Users WHERE id = $1`, [user_id]);
    }

    query_user_events(user_id){
        return db.query(`SELECT * FROM Events WHERE Events.owner_id = $1 `, [user_id])
    }
}

module.exports = new User();