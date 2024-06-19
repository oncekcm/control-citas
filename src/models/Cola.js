// src/models/Cola.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Cola = sequelize.define(
  "cola",
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

export default Cola;
