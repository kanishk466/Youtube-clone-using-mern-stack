import dotenv from "dotenv"

import connectDB   from "./db/db.js"

dotenv.config()
connectDB()
.then()
.catch(err => console.log("Mongo Db connection failed " ,err))