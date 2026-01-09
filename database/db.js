import mongoose from "mongoose";
import dotenv from "dotenv";
import product from "../database/med_schema.js";
import data from '../dataset/product.json' with { type: 'json' };

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("db connected");
      return product.countDocuments();
    })
    .then((count) => {
      if (count === 0) {
        return product.insertMany(data);
      } else {
        console.log("data inserted");
      }
    })
    .then(() => console.log("data inserted"))
    .catch((err) => console.error("db not connected:", err.message));
};

export default db;
