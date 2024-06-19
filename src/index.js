import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/relations.js";  // Importar las relaciones
async function main() {
  await sequelize.sync({force: false});
  app.listen(4000);
  console.log("Server on port 4000");
}

main();
