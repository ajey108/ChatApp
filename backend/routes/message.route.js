import express from "express";
import { sendMessage,getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();


// protect route 

router.get("/:id",protectRoute,getMessages);  //user sendig the message
router.post("/send/:id",protectRoute,sendMessage)


export default router;