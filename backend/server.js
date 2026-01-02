import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config(); // allow to read the content of dotenv file

const app = express();
const PORT = process.env.PORT || 5000;

// authentication
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port http://localhost:" + PORT);

    connectDB();
});