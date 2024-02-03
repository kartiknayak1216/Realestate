import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  updateListing,
  search,
} from "../controllers/Listing.controllers.js";
import { verifyToken } from "../utils/verify.js";
const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);

router.get("/get/:id", getListing);

router.post("/update/:id", verifyToken, updateListing);
router.get("/search", search);
export default router;
