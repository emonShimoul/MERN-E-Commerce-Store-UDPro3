import express from "express";
import dotenv from "dotenv";

dotenv.config(); // allow to read the content of dotenv file

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log("Server is running on port http://localhost:" + PORT);
});