// src/controllers/pacienteController.js
import Paciente from "../models/Paciente.js";

// Obtener todos los pacientes
export async function getPacientes(req, res) {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo paciente
export async function createPaciente(req, res) {
  const { nombre, fechaNacimiento, direccion, telefono, ...otrosCampos } = req.body;
  try {
    const nuevoPaciente = await Paciente.create({
      nombre,
      fechaNacimiento,
      direccion,
      telefono,
      ...otrosCampos,
    });
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener un paciente por ID
export async function getPaciente(req, res) {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar un paciente por ID
export async function updatePaciente(req, res) {
  const { id } = req.params;
  const { nombre, fechaNacimiento, direccion, telefono, ...otrosCampos } = req.body;
  try {
    let paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }
    paciente.nombre = nombre;
    paciente.fechaNacimiento = fechaNacimiento;
    paciente.direccion = direccion;
    paciente.telefono = telefono;
    // Actualizar otros campos según sea necesario
    await paciente.save();
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar un paciente por ID
export async function deletePaciente(req, res) {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }
    await paciente.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
