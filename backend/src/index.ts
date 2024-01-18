import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./config/dbConnect";

const PORT = process.env.PORT;

const app = express();
connection();

app.listen(PORT, () => {
  console.log(`Server Started In Port: ${PORT}`);
});
