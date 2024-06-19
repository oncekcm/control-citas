// src/controllers/pagoController.js
import Pago from "../models/Pago.js";

// Obtener todos los pagos
export async function getPagos(req, res) {
  try {
    const pagos = await Pago.findAll();
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo pago
export async function createPago(req, res) {
  const { monto, fecha, pacienteId, ...otrosCampos } = req.body;
  try {
    const nuevoPago = await Pago.create({
      monto,
      fecha,
      pacienteId,
      ...otrosCampos,
    });
    res.status(201).json(nuevoPago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener un pago por ID
export async function getPago(req, res) {
  const { id } = req.params;
  try {
    const pago = await Pago.findByPk(id);
    if (!pago) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
    res.json(pago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar un pago por ID
export async function updatePago(req, res) {
  const { id } = req.params;
  const { monto, fecha, pacienteId, ...otrosCampos } = req.body;
  try {
    let pago = await Pago.findByPk(id);
    if (!pago) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
    pago.monto = monto;
    pago.fecha = fecha;
    pago.pacienteId = pacienteId;
    // Actualizar otros campos según sea necesario
    await pago.save();
    res.json(pago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar un pago por ID
export async function deletePago(req, res) {
  const { id } = req.params;
  try {
    const pago = await Pago.findByPk(id);
    if (!pago) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
    await pago.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
