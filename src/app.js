// app.js
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Importar rutas
import medicRoutes from "./routes/medic.routes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import colaRoutes from "./routes/colaRoutes.js";
import consultorioRoutes from "./routes/consultorioRoutes.js";
import fichaRoutes from "./routes/fichaRoutes.js";
import citaRoutes from "./routes/citaRoutes.js";
import pagoRoutes from "./routes/pagoRoutes.js";
//import secretariaRoutes from "./models/Secretaria.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use("/api/medic",medicRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/cola", colaRoutes);
app.use("/api/consultorio", consultorioRoutes);
app.use("/api/ficha", fichaRoutes);
app.use("/api/cita", citaRoutes);
app.use("/api/pago", pagoRoutes);
//app.use("/api/secretaria",secretariaRoutes);
//app.use("/api/secretarias", secretariaRoutes);

export default app;






/*import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Necesario para resolver correctamente la ruta de __dirname en módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Import routes
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import medicRoutes from "./routes/medic.routes.js";
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
//app.set("view engine ","pug");
app.use(express.static(path.join(__dirname, 'public')));
//--------------app.set("views", "")
// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/medic",medicRoutes);
export default app;*/
