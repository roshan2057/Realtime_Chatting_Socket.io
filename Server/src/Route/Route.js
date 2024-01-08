import express from "express";
import { get_messages, login, profile, regiser } from "../Controller/Controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("working fine");
});

router.post("/login", login);

router.post("/register", regiser);

router.get("/profile", profile);

router.get("/messages",get_messages)

export default router;
