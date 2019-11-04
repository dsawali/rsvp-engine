const db = require('../config/db');
const schema = `CREATE TABLE IF NOT EXISTS Attendees (
                        id UUID PRIMARY KEY,
                        event_id UUID NOT NULL,
                        email TEXT UNIQUE,
                        first_name TEXT NOT NULL,
                        last_name TEXT NOT NULL,
                        status TEXT DEFAULT 'NO_REPLY',
                        FOREIGN KEY (event_id)
                        REFERENCES Events (id) ON DELETE CASCADE
                    )`;

class User {
    constructor() {
        db.query(schema);
    }

    insert_attendee_data(attendee_data){
        return db.query('INSERT INTO Attendees (id, event_id, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5)', attendee_data);
    }

    query_attendee_detail(attendee_id){
        return db.query(`SELECT * FROM Attendees WHERE id = $1`, [attendee_id]);
    }
}

module.exports = new User();