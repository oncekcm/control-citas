// src/models/Paciente.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Cita from "./Cita.js";
import Pago from "./Pago.js";
const Paciente = sequelize.define(
  "paciente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    // Otros campos según sea necesario
  },
  {
    timestamps: false,
    // Otras configuraciones si es necesario
  }
);

export default Paciente;
//Paciente.hasMany(Cita, {foreignKey: "pacienteId",});
//Paciente.hasMany(Pago, {foreignKey: "pacienteId",});