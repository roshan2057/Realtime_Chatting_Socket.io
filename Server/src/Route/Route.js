import express from "express";
import User from "../Model/User.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("working fine");
});

router.post("/login", (req, res) => {
  try {
    console.log(req.body);

    res.cookie("cookie", "this id token valkue", {
      maxAge: 9000000,
      httpOnly: true,
      secure: false,
    });
    res.status(200).json({ token: "this is token" });
    // res.status(401).json({message:"Username and Password Error"})
  } catch (error) {
    throw error;
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, phone, password } = req.body;
    const find = await User.find({ username: username });
    if (find.length) {
      return res
        .status(403)
        .json({ message: "Username already registered try another name" });
    }
    const add = await User.create({ username, phone, password });
   
    res
    .status(201)
    .json({ id: add.id, username: add.username });
  } catch (error) {
    console.error(error);
  }
});

router.get("/profile", (req, res) => {
  const token = req.headers.cookie.split("=")[1];
  console.log(token);
  res.send("ok");
});

export default router;
