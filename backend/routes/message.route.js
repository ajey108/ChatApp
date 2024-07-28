import express from "express";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

//user sendig the message
// protect route 
router.post("/send/:id",protectRoute,sendMessage)

export default router;