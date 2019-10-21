const attendee_schema = require('../database/schema').attendee;
const connect = require('../database/db');

class User {
    constructor() {
        connect.db.run(attendee_schema);
    }

    insert_attendee_data(attendee_data){
        return new Promise ((resolve, reject) => {
            connect.db.run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?)', attendee_data, (err) => {
                if(err) reject(err);
                else resolve('ATTENDEE HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    }

    query_event_attendees(event_id){
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT first_name, last_name, email, status FROM Attendee WHERE event_id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }

    // TODO: Need to change the filtering algorithm to a better one
    update_attendee_status(id, email, status){
        if(['NOT_GOING', 'MAYBE', 'GOING'].includes(status))
            connect.db.run(`UPDATE Attendee SET status = "${status}" WHERE event_id = ${id} AND email = "${email}"`)
        else
            return false
    }
}

module.exports = new User();