import express from "express";
import cors from "cors";
import { PORT, MONGO_DB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// MIDLEWARE
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send("Hello Express");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("MONGO-DB d amjilttai holbogdloo");
    app.listen(PORT, () => console.log(`App ${PORT}: deer ajilj bn`));
  })
  .catch(err => console.log("Aldaa garlaa:", err));
