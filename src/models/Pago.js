// src/models/Pago.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Paciente from "./Paciente.js";

const Pago = sequelize.define(
  "pago",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pacientes',
        key: 'id'
      }
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otros campos según sea necesario
  },
  {
    timestamps: false,
    // Otras configuraciones si es necesario
  }
);

// Relaciones
//Pago.belongsTo(Paciente, { foreignKey: "pacienteId" });

export default Pago;
