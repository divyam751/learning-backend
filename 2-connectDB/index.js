const express = require("express");
require("dotenv").config();
const connection = require("./db/db");
const UserModel = require("./module/User.module");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.post("/users/create", async (req, res) => {
  const { username, email, password } = req.body;
  if (username === "" || email === "" || password === "") {
    res.status(400).send({ message: "please complete required fields!" });
  }

  const existing_user = await UserModel.findOne({ email: email });

  if (existing_user !== null) {
    res.status(400).send({ message: "Email already registered,please login" });
    return;
  }

  const new_user = new UserModel({
    username,
    email,
    password,
  });

  await new_user.save();
  res.status(201).send({ message: "User register successfully !" });
});

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB connected!");
  } catch (error) {
    console.log("Error during connected to DB!");
    console.error("Error:", error);
  }

  console.log(`Server is running on port : ${PORT}`);
});
