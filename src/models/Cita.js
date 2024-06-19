// src/models/Cita.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Paciente from "./Paciente.js";
import Medic from "./Medic.js"; // Importación corregida

const Cita = sequelize.define(
  "cita",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: "pendiente",
    },
    // Otros campos según sea necesario
  },
  {
    timestamps: false,
    // Otras configuraciones si es necesario
  }
);

// Relaciones
//Cita.belongsTo(Paciente, { foreignKey: "pacienteId" });
//Cita.belongsTo(Medic, { foreignKey: "medicsId" });

export default Cita;
//Cita.belongsTo(Medico, {foreignKey: "medicoId",});