const connect = require('./connect')
const schema = require ('./schema')

const mock_user_data = ["john.doe@anonymous.com", "guessme", "John", "Doe", "jane.morrison@static.com", "dynamic", "Jane", "Morisson"]
const mock_event_data = ["My Wedding", "John Doe", "Company Meetups", "Jane Morrison"];
const mock_attendee_data = [1, "jane.doe@domain.com", "Jane", "Doe", 1, "tim.moore@gmail.com", "Tim", "Moore", 2, "maria.betty@yahoo.com", "Maria", "Betty"];

module.exports = {
    init_all_table: () => {
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

    insert_user_data: (user_data) => {
        connect.db.run('INSERT INTO User (email, password, first_name, last_name) VALUES (?, ?, ?, ?)', user_data, (err) => {
            if(err) throw err;
        })
    },

    insert_event_data: (event_data) => {
        connect.db.run('INSERT INTO Event (name, owner) VALUES (?, ?)', event_data, (err) => {
            if(err) throw err;
        })
    },

    insert_attendee_data: (attendee_data) => {
        connect.db.run('INSERT INTO Attendee (event_id, email, first_name, last_name) VALUES (?, ?, ?, ?), (?, ?, ?, ?)', attendee_data, (err) => {
            if(err) throw err;
        })
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

    query_user_exist: (user_id, callback) => {
        connect.db.each(`SELECT first_name, last_name, email FROM User WHERE id = ${user_id}`,(err, rows) => {
            callback(rows)
        })
    },

    query_event_details: (event_id, callback) => {
        connect.db.each(`SELECT name, owner, status FROM Event WHERE id = ${event_id}`,(err, rows) => {
            callback(rows)
        })
    },

    query_event_attendees: (event_id, callback) => {
        connect.db.each(`SELECT first_name, last_name, email, status FROM Attendee WHERE event_id = ${event_id}`,(err, rows) => {
            callback(rows)
        })
    }
}