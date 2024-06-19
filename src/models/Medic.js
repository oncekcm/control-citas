import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import Consultorio from "./Consultorio.js"; // Importa Consultorio correctamente


export const Medic = sequelize.define(
  "medics",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    speciality: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
//        default: "xxx.gmail.com"
      },
    image: {
        type: DataTypes.STRING,
        
      },
    services: {
        type: DataTypes.STRING,
        
      },
  
     certifications: {
        type: DataTypes.STRING,
        
      },
     state: {
        type: DataTypes.STRING,
        
      }
    },
    {  timestamps: false,
      }
);
export default Medic;
// Medic.hasMany(Task, {
//  foreinkey: "medicId",
//   sourceKey: "id",
// });
// Office.belongsTo(Medic, { foreinkey: "medicId", targetId: "id" });
//Medic.hasMany(Consultorio, {foreignKey: "medicoId",});
//Consultorio.belongsTo(Medic,{foreignKey: "medicsId",});

