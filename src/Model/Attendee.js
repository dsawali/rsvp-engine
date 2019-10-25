const db = require('../config/db');
const schema = "CREATE TABLE Attendee (" +
                        "event_id INTEGER NOT NULL," +
                        "email TEXT NOT NULL," +
                        "first_name TEXT NOT NULL," +
                        "last_name TEXT NOT NULL," +
                        "status TEXT DEFAULT 'NO_REPLY'," + 
                        "FOREIGN KEY (event_id)" +
                        "REFERENCES Event (id) ON DELETE CASCADE" +
                    ");";

class User {
    constructor() {
        db.db.run(schema);
    }

    insert_attendee_data(attendee_data){
        return new Promise ((resolve, reject) => {
            db.db.run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?)', attendee_data, (err) => {
                if(err) reject(err);
                else resolve('ATTENDEE HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    }

    query_event_attendees(event_id){
        return new Promise((resolve, reject) => {
            db.db.all(`SELECT first_name, last_name, email, status FROM Attendee WHERE event_id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }

    // TODO: Need to change the filtering algorithm to a better one
    update_attendee_status(id, email, status){
        if(['NOT_GOING', 'MAYBE', 'GOING'].includes(status))
            db.db.run(`UPDATE Attendee SET status = "${status}" WHERE event_id = ${id} AND email = "${email}"`)
        else
            return false
    }
}

module.exports = new User();