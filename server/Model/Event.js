const event_schema = require('../database/schema').event;
const connect = require('../database/db');

class Event {
    constructor() {
        connect.db.run(event_schema);
    }
    
    insert_event_data(event_data){
        return new Promise((resolve, reject) => {
            connect.db.run('INSERT INTO Event (owner_id, name, description) VALUES (?, ?, ?)', event_data, (err) => {
                if(err) reject(err);
                else resolve('EVENT HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    }

    query_event_details(event_id){
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT name, description, status FROM Event WHERE id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    }

    // TODO: Need to change the filtering algorithm to a better one
    update_event_status(id, status){
        if(['IN_PROGRESS', 'COMPLETED'].includes(status))
            connect.db.run(`UPDATE Event SET status = "${status}" WHERE id = ${id}`)
        else
            return false
    }
}

module.exports = new Event();