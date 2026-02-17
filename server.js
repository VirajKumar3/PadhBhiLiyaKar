import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./Connections/connectDB.js";
import FortressKey from "./Connections/Schema.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (IMPORTANT)
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();


// GET DATA
app.get("/", async (req, res) => {
  const datas = await FortressKey.find();
  res.json(datas);
});


// POST DATA
app.post("/", async (req, res) => {
  try {
    await FortressKey.create({
      id: uuidv4(),
      siteURL: req.body.siteURL,
      username: req.body.username,
      password: req.body.password,
    });
    console.log("Password added successfully");
    res.send("Data Added");
  } catch (error) {
    console.error("Error adding password:", error);
    res.status(500).json({ error: "Failed to add password" });
  }
});


// SERVER START
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);