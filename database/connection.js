import config from "./config.js";
import sqlite3  from "sqlite3";

let db = new sqlite3.Database(config.DB_FILENAME, sqlite3.OPEN_READWRITE, err => {
  if (err) return console.error(`Error occured: ${err.message}`);

  console.log("Connected to DB")
})

export default db;