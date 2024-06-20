// src/controllers/citaController.js
import Cita from "../models/Cita.js";

// Obtener todas las citas
export async function getCitas(req, res) {
  try {
    const citas = await Cita.findAll();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear una nueva cita
export async function createCita(req, res) {
  const { fecha, estado, pacienteId, medicoId, ...otrosCampos } = req.body;
  try {
    const nuevaCita = await Cita.create({
      fecha,
      estado,
      pacienteId,
      medicoId,
      ...otrosCampos,
    });
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener una cita por ID
export async function getCita(req, res) {
  const { id } = req.params;
  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    res.json(cita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar una cita por ID
export async function updateCita(req, res) {
  const { id } = req.params;
  const { fecha, estado, pacienteId, medicoId, ...otrosCampos } = req.body;
  try {
    let cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    cita.fecha = fecha;
    cita.estado = estado;
    cita.pacienteId = pacienteId;
    cita.medicoId = medicoId;
    // Actualizar otros campos según sea necesario
    await cita.save();
    res.json(cita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Eliminar una cita por ID
export async function deleteCita(req, res) {
  const { id } = req.params;
  try {
    const cita = await Cita.findByPk(id);
    if (!cita) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    await cita.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCitasPendientesDePaciente(req, res) {
  const { pacienteId } = req.params;
  try {
    const citasPendientes = await Cita.findAll({
      where: {
        pacienteId,
        estado: 'pendiente',
      },
    });
    res.json(citasPendientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
