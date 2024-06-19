// src/routes/citaRoutes.js
import { Router } from "express";
import {
  getCitas,
  createCita,
  getCita,
  updateCita,
  deleteCita,
} from "../controllers/citaController.js";

const router = Router();

// Rutas
router.get("/", getCitas);
router.post("/", createCita);
router.get("/:id", getCita);
router.put("/:id", updateCita);
router.delete("/:id", deleteCita);

export default router;
