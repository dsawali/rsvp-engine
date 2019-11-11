const db = require('../config/db');
const schema = `CREATE TABLE IF NOT EXISTS Events (
                    id UUID PRIMARY KEY,
                    owner_id UUID NOT NULL,
                    name TEXT NOT NULL,
                    description TEXT,
                    status TEXT DEFAULT 'NOT_STARTED',
                    FOREIGN KEY (owner_id)
                    REFERENCES Users (id) ON DELETE CASCADE
                )`;

class Event {
    constructor() {
        db.query(schema);
    }
    
    insert_event_data(event_data){
        return db.query('INSERT INTO Events (id, owner_id, name, description) VALUES ($1, $2, $3, $4)', event_data);
    }

    query_event_detail(event_id){
        return db.query(`SELECT * FROM Events WHERE id = $1`, [event_id]);
    }

    query_event_attendees(event_id){
        return db.query(`SELECT * FROM Attendees WHERE event_id = $1`, [event_id]);
    }
}

module.exports = new Event();