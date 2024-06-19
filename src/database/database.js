import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb", // db name,
  "postgres", // username
  "dragon11", // password
  {
    host: "localhost",
    dialect: "postgres",
    logging: true,
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);