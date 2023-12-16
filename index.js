import dotenv from "dotenv";
import express from "express";

// use env vars
dotenv.config();

// use express
const app = express();
// listen to 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// public folder
app.use(express.static("public"));

// use ejs
app.set("view engine", "ejs");

// routes

// GET: /
// home screen
app.get("/", (req, res) => {
    res.render("home");
});
