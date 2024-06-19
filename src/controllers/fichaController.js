// src/controllers/fichaController.js
import Ficha from "../models/Ficha.js";

// Obtener todas las fichas
export async function getFichas(req, res) {
  try {
    const fichas = await Ficha.findAll();
    res.json(fichas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear una nueva ficha
export async function createFicha(req, res) {
  const { numero, estado, ...otrosCampos } = req.body;
  try {
    const nuevaFicha = await Ficha.create({
      numero,
      estado,
      ...otrosCampos,
    });
    res.status(201).json(nuevaFicha);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener una ficha por ID
export async function getFicha(req, res) {
  const { id } = req.params;
  try {
    const ficha = await Ficha.findByPk(id);
    if (!ficha) {
      return res.status(404).json({ message: "Ficha no encontrada" });
    }
    res.json(ficha);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar una ficha por ID
export async function updateFicha(req, res) {
  const { id } = req.params;
  const { numero, estado, ...otrosCampos } = req.body;
  try {
    let ficha = await Ficha.findByPk(id);
    if (!ficha) {
      return res.status(404).json({ message: "Ficha no encontrada" });
    }
    ficha.numero = numero;
    ficha.estado = estado;
    // Actualizar otros campos según sea necesario
    await ficha.save();
    res.json(ficha);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar una ficha por ID
export async function deleteFicha(req, res) {
  const { id } = req.params;
  try {
    const ficha = await Ficha.findByPk(id);
    if (!ficha) {
      return res.status(404).json({ message: "Ficha no encontrada" });
    }
    await ficha.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
