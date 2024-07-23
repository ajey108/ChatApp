import express from "express";
import {  SignUp,login,logout } from "../controllers/authcontroller.js";

const router = express.Router();

router.post('/signup',SignUp);
router.post('/login',login);
router.post('/logout',logout);

export default router;