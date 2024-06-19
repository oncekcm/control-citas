// src/models/Consultorio.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Medic} from "./Medic.js"; // Importar Medic después de definirlo correctamente

const Consultorio = sequelize.define(
  "consultorio",
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

    // Otros campos según sea necesario
  },
  {
    timestamps: false,
    // Otras configuraciones si es necesario
  }
);


// Establece la relación belongsTo con Medic
//Consultorio.belongsTo(Medic, {  foreignKey: "medicsId", });

export default Consultorio;