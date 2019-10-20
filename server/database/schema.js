
module.exports = {
    user: "CREATE TABLE User (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "email TEXT NOT NULL UNIQUE," +
                    "password TEXT NOT NULL," +
                    "firstname TEXT," +
                    "lastname TEXT" +
                ");",

    event: "CREATE TABLE Event (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                    "owner_id TEXT NOT NULL," +
                    "name TEXT NOT NULL," +
                    "description TEXT," +
                    "status TEXT DEFAULT 'NOT_STARTED'," +
                    //"attendees" + //Still not sure... let's see later
                    "FOREIGN KEY (owner_id)" +
                    "REFERENCES User (id) ON DELETE CASCADE" +
                ");",

    attendee: "CREATE TABLE Attendee (" +
                        "event_id INTEGER NOT NULL," +
                        "email TEXT NOT NULL," +
                        "first_name TEXT NOT NULL," +
                        "last_name TEXT NOT NULL," +
                        "status TEXT DEFAULT 'NO_REPLY'," + 
                        "FOREIGN KEY (event_id)" +
                        "REFERENCES Event (id) ON DELETE CASCADE" +
                    ");"
}