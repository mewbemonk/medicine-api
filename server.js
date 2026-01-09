import express from "express";
import router from "./route/router.js";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database/db.js"



dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

db();

app.use("/", router);

app.listen(process.env.PORT, () => console.log("server started"));
