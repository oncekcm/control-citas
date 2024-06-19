// src/routes/consultorioRoutes.js
import { Router } from "express";
import {
  getConsultorios,
  createConsultorio,
  getConsultorio,
  updateConsultorio,
  deleteConsultorio,
} from "../controllers/consultorioController.js";

const router = Router();

// Rutas
router.get("/", getConsultorios);
router.post("/", createConsultorio);
router.get("/:id", getConsultorio);
router.put("/:id", updateConsultorio);
router.delete("/:id", deleteConsultorio);

export default router;
