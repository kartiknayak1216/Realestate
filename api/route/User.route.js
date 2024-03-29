import express from "express";
import { verifyToken } from "../utils/verify.js";
import {
  deleteuser,
  update,
  getUserListings,
  getUser
} from "../controllers/User.controller.js";
const router = express.Router();

router.delete("/delete/:id", verifyToken, deleteuser);
router.post("/update/:id", verifyToken, update);
router.get("/solo/:id", verifyToken, getUserListings);
router.get("/user/:id", verifyToken, getUser);
export default router;
