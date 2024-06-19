import { Router } from "express";
import {
  getPacientes,
  createPaciente,
  updatePaciente,
  getPaciente,
  deletePaciente,
} from "../controllers/pacienteController.js";

const router = Router();

// Rutas para pacientes
router.get("/", getPacientes); // Obtener todos los pacientes
router.post("/", createPaciente); // Crear un nuevo paciente
router.get("/:id", getPaciente); // Obtener un paciente por ID
router.put("/:id", updatePaciente); // Actualizar un paciente por ID
router.delete("/:id", deletePaciente); // Eliminar un paciente por ID

export default router;
