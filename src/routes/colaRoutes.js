// src/routes/colaRoutes.js
import { Router } from "express";
import {
  getColas,
  createCola,
  getCola,
  updateCola,
  deleteCola,
} from "../controllers/colaController.js";

const router = Router();

// Rutas
router.get("/", getColas);
router.post("/", createCola);
router.get("/:id", getCola);
router.put("/:id", updateCola);
router.delete("/:id", deleteCola);

export default router;
