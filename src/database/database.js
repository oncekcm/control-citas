import Sequelize from "sequelize";
/*export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Archivo de la base de datos SQLite
  logging: false*/
export const sequelize = new Sequelize(
  "projectsdb_sfhi", // db name,
  "projectsdb_sfhi_user", // username
  "qiJ9NG9bPVtIURwUknt5lAeI6liQObNt", // password
  {
    host: 'dpg-cpec6avsc6pc739dhr2g-a.oregon-postgres.render.com', // Hostname
    port: 5432, // Port
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false // Permite conexiones no autorizadas (útil para desarrollo)
      }
    },
    logging: false, // Opcional: desactiva el registro de SQL en la consola
  
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
