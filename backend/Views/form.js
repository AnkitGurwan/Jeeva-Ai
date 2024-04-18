import dotenv from "dotenv";
dotenv.config({path:"config/.env"});

import express from "express";
import { createForm, deleteForm, getAllForms } from "../Controllers/formController.js";

const router = express.Router();

router.get("/getAllForms", getAllForms);
router.post("/createForm", createForm);
router.delete("/delete/:id", deleteForm);

const form = router;
export default form;