
module.exports = {
    user_table: "CREATE TABLE User (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "email TEXT NOT NULL UNIQUE," +
                    "password TEXT NOT NULL," +
                    "firstname TEXT," +
                    "lastname TEXT" +
                ");",

    event_table: "CREATE TABLE Event (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "name TEXT NOT NULL," +
                    "owner TEXT NOT NULL," +
                    "status TEXT DEFAULT 'NOT_STARTED'" +
                    //"attendees" + //Still not sure... let's see later
                ");",

    attendee_table: "CREATE TABLE Attendee (" +
                        "event_id INTEGER NOT NULL," +
                        "email TEXT NOT NULL," +
                        "first_name TEXT NOT NULL," +
                        "last_name TEXT NOT NULL," +
                        "status TEXT DEFAULT 'NO_REPLY'," + 
                        "FOREIGN KEY (event_id)" +
                        "REFERENCES Event (id)" +
                    ");"
}