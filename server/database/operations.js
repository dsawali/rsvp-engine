const connect = require('./connect')
const schema = require ('./schema')

module.exports = {
    init_all_table: () => {
        connect.db.serialize( () => {
            connect.db.run(schema.user)
                .run(schema.event)
                .run(schema.attendee)
                .get('PRAGMA foreign_keys = ON');
        });
    },

    insert_user_data: (user_data) => {
        return new Promise ((resolve, reject) => {
            connect.db.run('INSERT INTO User (email, password, firstname, lastname) VALUES (?, ?, ?, ?)', user_data, (err) => {
                if(err) reject(err);
                else resolve('USER HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    },

    insert_event_data: (event_data) => {
        return new Promise((resolve, reject) => {
            connect.db.run('INSERT INTO Event (owner_id, name, description) VALUES (?, ?, ?)', event_data, (err) => {
                if(err) reject(err);
                else resolve('EVENT HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    },

    insert_attendee_data: (attendee_data) => {
        return new Promise ((resolve, reject) => {
            connect.db.run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?), (?, ?, ?, ?)', attendee_data, (err) => {
                if(err) reject(err);
                else resolve('ATTENDEE HAS BEEN SUCCESSFULLY CREATED');
            });
        });
    },

    // TODO: Need to change the filtering algorithm to a better one
    update_event_status: (id, status) => {
        if(['IN_PROGRESS', 'COMPLETED'].includes(status))
            connect.db.run(`UPDATE Event SET status = "${status}" WHERE id = ${id}`)
        else
            return false
    },

    // TODO: Need to change the filtering algorithm to a better one
    update_attendee_status: (id, email, status) => {
        if(['NOT_GOING', 'MAYBE', 'GOING'].includes(status))
            connect.db.run(`UPDATE Attendee SET status = "${status}" WHERE event_id = ${id} AND email = "${email}"`)
        else
            return false
    },

    query_email_exist: (email) => {
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT id, firstname, lastname FROM User WHERE email = "${email.toLowerCase()}"`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    },

    query_event_details: (event_id) => {
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT name, description, status FROM Event WHERE id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    },

    query_event_attendees: (event_id) => {
        return new Promise((resolve, reject) => {
            connect.db.all(`SELECT first_name, last_name, email, status FROM Attendee WHERE event_id = ${event_id}`,(err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            })
        })
    },

    // For Debugging Purposes (Pre-req: Table needs to be populated first)
    print_table: (table) => {
        if (table == null) {console.log('Please specify the table name'); return;}
        switch (table) {
            case "User": {
                connect.db.each('SELECT * FROM User', (err, row) => {
                    if(err) throw err;
                    console.log(row)
                })
                break;
            }
            case "Event": {
                connect.db.each('SELECT * FROM Event', (err, row) => {
                    if(err) throw err;
                    console.log(row)
                })
                break;
            }
            case "Attendee": {
                connect.db.each('SELECT * FROM Attendee', (err, row) => {
                    if(err) throw err;
                    console.log(row)
                })
                break;
            }
            default:
                console.log("Table Does Not Exist")
        }
    }
}