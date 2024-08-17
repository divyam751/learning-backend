import express from "express";
import fs from "fs";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/api/post", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send({ message: "Internal server error" });
      console.error("Error during reading db.json file:", err);
    } else {
      res.status(200).send({ data: JSON.parse(data) });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
