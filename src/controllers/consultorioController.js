// src/controllers/consultorioController.js
import Consultorio from "../models/Consultorio.js";

// Obtener todos los consultorios
export async function getConsultorios(req, res) {
  try {
    const consultorios = await Consultorio.findAll();
    res.json(consultorios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo consultorio
export async function createConsultorio(req, res) {
  const { nombre, ubicacion, ...otrosCampos } = req.body;
  try {
    const nuevoConsultorio = await Consultorio.create({
      nombre,
      ubicacion,
      ...otrosCampos,
    });
    res.status(201).json(nuevoConsultorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener un consultorio por ID
export async function getConsultorio(req, res) {
  const { id } = req.params;
  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ message: "Consultorio no encontrado" });
    }
    res.json(consultorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar un consultorio por ID
export async function updateConsultorio(req, res) {
  const { id } = req.params;
  const { nombre, ubicacion, ...otrosCampos } = req.body;
  try {
    let consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ message: "Consultorio no encontrado" });
    }
    consultorio.nombre = nombre;
    consultorio.ubicacion = ubicacion;
    // Actualizar otros campos según sea necesario
    await consultorio.save();
    res.json(consultorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar un consultorio por ID
export async function deleteConsultorio(req, res) {
  const { id } = req.params;
  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ message: "Consultorio no encontrado" });
    }
    await consultorio.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
