// src/routes/fichaRoutes.js
import { Router } from "express";
import {
  getFichas,
  createFicha,
  getFicha,
  updateFicha,
  deleteFicha,
} from "../controllers/fichaController.js";

const router = Router();

// Rutas
router.get("/", getFichas);
router.post("/", createFicha);
router.get("/:id", getFicha);
router.put("/:id", updateFicha);
router.delete("/:id", deleteFicha);

export default router;
