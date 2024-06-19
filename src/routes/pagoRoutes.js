// src/routes/pagoRoutes.js
import { Router } from "express";
import {
  getPagos,
  createPago,
  getPago,
  updatePago,
  deletePago,
} from "../controllers/pagoController.js";

const router = Router();

// Rutas
router.get("/", getPagos);
router.post("/", createPago);
router.get("/:id", getPago);
router.put("/:id", updatePago);
router.delete("/:id", deletePago);

export default router;
