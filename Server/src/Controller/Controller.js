import Message from "../Model/Message.js";
import User from "../Model/User.js";
import { createToken, verifyToken } from "./JsToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const check = await User.findOne({ username });
    if (!check) {
      return res.status(404).json({ message: "Username not found" });
    } else if (check.password != password) {
      return res.status(404).json({ message: "Password incorrect" });
    } else {
      const token = await createToken({
        id: check.id,
        username: check.username,
      });
      res.cookie("token", token, {
        // httpOnly: true,
        secure: false,
      });
      res.status(200).json({ id: check.id, username: check.username });
    }
  } catch (error) {
    throw error;
  }
};

export const regiser = async (req, res) => {
  try {
    const { username, phone, password, gender } = req.body;
    const find = await User.find({ username: username });
    if (find.length) {
      return res
        .status(403)
        .json({ message: "Username already registered try another name" });
    }
    const add = await User.create({ username, phone, password, gender });
    const token = await createToken({ id: add.id, username: add.username });
    res.cookie("token", token, {
      // httpOnly: true,
      secure: false,
    });
    res.status(201).json({ id: add.id, username: add.username });
  } catch (error) {
    console.error(error);
  }
};

export const profile = async (req, res) => {
  try {
    const token = req.headers.cookie.split("=")[1];
    const data = verifyToken(token);
    if (!data) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    res.status(200).json({ id: data.id, username: data.username });
  } catch (error) {
    res.status(400).json({ message: "No token" });
  }
};

export const save_message = async (data) => {
  try {
    const { to: receiver, from: sender, text: text } = data;
    await Message.create({ receiver, sender, text });
  } catch (error) {
    console.error(error);
  }
};

export const get_messages = async (req, res) => {
  try {
    const to = req.query.id;
    const token = req.headers.cookie.split("=")[1];
    const data = verifyToken(token);
    if (!data) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    const from = data.id;
    const messages = await Message.find({
      $or: [
        { sender: from, receiver: to },
        { sender: to, receiver: from },
      ],
    });
    res.status(200).json(JSON.stringify(messages));
  } catch (error) {
    console.error(error);
  }
};
