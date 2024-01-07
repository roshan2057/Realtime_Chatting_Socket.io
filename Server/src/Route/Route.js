import express from "express";
import { login, profile, regiser } from "../Controller/Controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("working fine");
});

router.post("/login", login);

router.post("/register", regiser);

router.get("/profile", profile);

export default router;
