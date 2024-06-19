// src/models/Ficha.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Ficha = sequelize.define(
  "ficha",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER,
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

export default Ficha;
