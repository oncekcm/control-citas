## Nodejs Sequelize RESTAPI PostgreSQL

This is a simple REST API using Javascript Technologies and PostgreSQL.

- nodejs
- express
- postgreSQL
- sequelize

## Project Structure

```bash
.

├── package.json
├── sql
│   
└── src
    ├── app.js
    ├── index.js
    ├── controllers
    │   ├── citaController.js
    │   ├── consultorioController.js
    │   ├── colaController.js
    │   ├── fichaController.js
    │   ├── medicController.js
    │   ├── pacienteController.js
    │   └── pagoController.js
    ├── database
    │   └── database.js
    ├── models
    │   ├── Cita.js
    │   ├── Consultorio.js
    │   ├── Cola.js
    │   ├── Ficha.js
    │   ├── Medic.js
    │   ├── Paciente.js
    │   ├── Pago.js
    │   └── relations.js
    └── routes
        ├── citaRoutes.js
        ├── consultorioRoutes.js
        ├── colaRoutes.js
        ├── fichaRoutes.js
        ├── medicRoutes.js
        ├── pacienteRoutes.js
        └── pagoRoutes.js



