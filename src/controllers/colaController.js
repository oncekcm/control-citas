// src/controllers/colaController.js
import Cola from "../models/Cola.js";

// Obtener todas las colas
export async function getColas(req, res) {
  try {
    const colas = await Cola.findAll();
    res.json(colas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear una nueva cola
export async function createCola(req, res) {
  const { nombre, ...otrosCampos } = req.body;
  try {
    const nuevaCola = await Cola.create({
      nombre,
      ...otrosCampos,
    });
    res.status(201).json(nuevaCola);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener una cola por ID
export async function getCola(req, res) {
  const { id } = req.params;
  try {
    const cola = await Cola.findByPk(id);
    if (!cola) {
      return res.status(404).json({ message: "Cola no encontrada" });
    }
    res.json(cola);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar una cola por ID
export async function updateCola(req, res) {
  const { id } = req.params;
  const { nombre, ...otrosCampos } = req.body;
  try {
    let cola = await Cola.findByPk(id);
    if (!cola) {
      return res.status(404).json({ message: "Cola no encontrada" });
    }
    cola.nombre = nombre;
    // Actualizar otros campos según sea necesario
    await cola.save();
    res.json(cola);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar una cola por ID
export async function deleteCola(req, res) {
  const { id } = req.params;
  try {
    const cola = await Cola.findByPk(id);
    if (!cola) {
      return res.status(404).json({ message: "Cola no encontrada" });
    }
    await cola.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
