const db = require('./db');
const schema = "CREATE TABLE Event (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "owner_id TEXT NOT NULL," +
                    "name TEXT NOT NULL," +
                    "description TEXT," +
                    "status TEXT DEFAULT 'NOT_STARTED'," +
                    //"attendees" + //Still not sure... let's see later
                    "FOREIGN KEY (owner_id)" +
                    "REFERENCES User (id) ON DELETE CASCADE" +
                ");";

class Event {
    constructor() {
        db.db.run(schema);
    }
    
    insert_event_data(event_data){
        return new Promise((resolve, reject) => {
            db.db.run('INSERT INTO Event (owner_id, name, description) VALUES (?, ?, ?)', event_data, (err) => {
                if(err) reject(err);
                else resolve('EVENT HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    }

    query_event_details(event_id){
        return new Promise((resolve, reject) => {
            db.db.all(`SELECT name, description, status FROM Event WHERE id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }

    // TODO: Need to change the filtering algorithm to a better one
    update_event_status(id, status){
        if(['IN_PROGRESS', 'COMPLETED'].includes(status))
            db.db.run(`UPDATE Event SET status = "${status}" WHERE id = ${id}`)
        else
            return false
    }
}

module.exports = new Event();