import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";
import {
  addChat,
  getChat,
  getChats,
  readChat,
} from "../controllers/chat.controller.js";
const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);

export default router;
