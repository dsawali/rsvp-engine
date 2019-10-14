const sqlite3 = require('sqlite3').verbose();

module.exports = {
    db: null,
    connect: function () {
        return this.db = new sqlite3.Database(':memory:',(err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
        });
    },

    destroy: function () {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }
}


