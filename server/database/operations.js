const connect = require('./connect')
const schema = require ('./schema')

const mock_user_data = ["john.doe@anonymous.com", "guessme", "John", "Doe", "jane.morrison@static.com", "dynamic", "Jane", "Morisson"]
const mock_event_data = ["My Wedding", "John Doe", "Company Meetups", "Jane Morrison"];
const mock_attendee_data = [1, "jane.doe@domain.com", "Jane", "Doe", 1, "tim.moore@gmail.com", "Tim", "Moore", 2, "maria.betty@yahoo.com", "Maria", "Betty"];

module.exports = {
    init_all_table: async () => {
        connect.db.serialize( () => {
            connect.db.run(schema.user_table)
                .run(schema.event_table)
                .run(schema.attendee_table)
        })
    },

    insert_mock_data: () => {
        connect.db.serialize( () => {
            connect.db.run('INSERT INTO User (email, password, first_name, last_name) VALUES (?, ?, ?, ?), (?, ?, ?, ?)', mock_user_data, err => {if(err) throw err})
                .run('INSERT INTO Event (name, owner) VALUES (?, ?), (?, ?)', mock_event_data, err => {if(err) throw err})
                .run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)', mock_attendee_data, err => {if(err) throw err})
        })
    },

    insert_user_data: async (user_data) => {
        await connect.db.run('INSERT INTO User (email, password, firstname, lastname) VALUES (?, ?, ?, ?)', user_data, (err) => {
            if(err) throw err;
        })
    },

    insert_event_data: async (event_data) => {
        await connect.db.run('INSERT INTO Event (name, owner) VALUES (?, ?)', event_data, (err) => {
            if(err) throw err;
        })
    },

    insert_attendee_data: async (attendee_data) => {
        await connect.db.run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?), (?, ?, ?, ?)', attendee_data, (err) => {
            if(err) throw err;
        })
    },

    // TODO: Need to change the filtering algorithm to a better one
    update_event_status: async (id, status) => {
        if(['IN_PROGRESS', 'COMPLETED'].includes(status))
            await connect.db.run(`UPDATE Event SET status = "${status}" WHERE id = ${id}`)
        else
            return false
    },

    // TODO: Need to change the filtering algorithm to a better one
    update_attendee_status: async (id, email, status) => {
        if(['NOT_GOING', 'MAYBE', 'GOING'].includes(status))
            await connect.db.run(`UPDATE Attendee SET status = "${status}" WHERE event_id = ${id} AND email = "${email}"`)
        else
            return false
    },

    query_email_exist: async (email, callback) => {
        await connect.db.all(`SELECT id, firstname, lastname FROM User WHERE email = "${email.toLowerCase()}"`,(err, rows) => {
            callback(rows)
        })
    },

    query_event_details: async (event_id, callback) => {
        await connect.db.each(`SELECT name, owner, status FROM Event WHERE id = ${event_id}`,(err, rows) => {
            callback(rows)
        })
    },

    query_event_attendees: async (event_id, callback) => {
        await connect.db.each(`SELECT first_name, last_name, email, status FROM Attendee WHERE event_id = ${event_id}`,(err, rows) => {
            callback(rows)
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