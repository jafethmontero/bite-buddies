import express from "express";
import { loginUser, registerUser } from "../controllers/userController";

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

export default router;
