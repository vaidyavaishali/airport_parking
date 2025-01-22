import express from "express";
import cors from 'cors'
import { conn } from './connection.js'
import dataroute from "./routes/dataRoutes.js";
import route from "./routes/userRoute.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


conn()

app.use('/', dataroute)
app.use('/', route)

app.listen(4000, () => console.log("Server is running on port 4000")); 