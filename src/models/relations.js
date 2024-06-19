/*import Medico from "./Medic.js";
import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import Cita from "./Cita.js";
import Secretaria from "./Secretaria.js";
import Pago from "./Pago.js";

// Relaciones
Medico.hasMany(Cita, { foreignKey: "medicId" });
Cita.belongsTo(Medico, { foreignKey: "medicId" });

Medico.belongsTo(Consultorio, { foreignKey: 'medicId' });
Consultorio.belongsTo(Medico, { foreignKey: 'medicId' });

Consultorio.belongsTo(Secretaria, { foreignKey: "consultorioId" });
Secretaria.belongsTo(Consultorio, { foreignKey: "consultorioId" });

Paciente.hasMany(Cita, { foreignKey: "pacienteId" });
Cita.belongsTo(Paciente, { foreignKey: "pacienteId" });

Paciente.hasMany(Pago, { foreignKey: "pacienteId" });
Pago.belongsTo(Paciente, { foreignKey: "pacienteId" });

// Exportar modelos con relaciones
export { Medico, Consultorio, Paciente, Cita, Secretaria, Pago };
*/
/*
import Medic from "./Medic.js";
import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import Pago from "./Pago.js";
import Secretaria from "./Secretaria.js";
import Cita from "./Cita.js";

Medic.hasMany(Consultorio, { foreignKey: "medicId" });
Consultorio.belongsTo(Medic, { foreignKey: "medicId" });

Paciente.hasMany(Pago, { foreignKey: "pacienteId" });
Pago.belongsTo(Paciente, { foreignKey: "pacienteId" });

Paciente.hasMany(Cita, { foreignKey: "pacienteId" });
Cita.belongsTo(Paciente, { foreignKey: "pacienteId" });

Medic.hasMany(Cita, { foreignKey: "medicId" });
Cita.belongsTo(Medic, { foreignKey: "medicId" });

Consultorio.hasMany(Secretaria, { foreignKey: "consultorioId" });
Secretaria.belongsTo(Consultorio, { foreignKey: "consultorioId" });

export { Medic, Consultorio, Paciente, Pago, Secretaria, Cita };
*/
/*import Medic from "./Medic.js";
import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import Pago from "./Pago.js";

import Cita from "./Cita.js";

// Medic - Consultorio Relationship
Medic.hasMany(Consultorio, {
  foreignKey: "medicId",
  sourceKey: "id",
});
Consultorio.belongsTo(Medic, {
  foreignKey: "medicId",
  targetKey: "id",
});

// Paciente - Pago Relationship
Paciente.hasMany(Pago, {
  foreignKey: "pacienteId",
  sourceKey: "id",
});
Pago.belongsTo(Paciente, {
  foreignKey: "pacienteId",
  targetKey: "id",
});

// Paciente - Cita Relationship
Paciente.hasMany(Cita, {
  foreignKey: "pacienteId",
  sourceKey: "id",
});
Cita.belongsTo(Paciente, {
  foreignKey: "pacienteId",
  targetKey: "id",
});

// Medic - Cita Relationship
Medic.hasMany(Cita, {
  foreignKey: "medicId",
  sourceKey: "id",
});
Cita.belongsTo(Medic, {
  foreignKey: "medicId",
  targetKey: "id",
});

export { Medic, Consultorio, Paciente, Pago, Cita };*/
import Medic from "./Medic.js";
import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import Pago from "./Pago.js";
import Cita from "./Cita.js";

// Relaciones entre las clases

// Un Paciente tiene muchas Citas
Paciente.hasMany(Cita, {
  foreignKey: "pacienteId",
  sourceKey: "id",
});
// Una Cita pertenece a un Paciente
Cita.belongsTo(Paciente, {
  foreignKey: "pacienteId",
  targetKey: "id",
});

// Un Medico tiene muchas Citas
Medic.hasMany(Cita, {
  foreignKey: "medicId",
  sourceKey: "id",
});
// Una Cita pertenece a un Medico
Cita.belongsTo(Medic, {
  foreignKey: "medicId",
  targetKey: "id",
});

// Un Paciente tiene muchos Pagos
Paciente.hasMany(Pago, {
  foreignKey: "pacienteId",
  sourceKey: "id",
});
// Un Pago pertenece a un Paciente
Pago.belongsTo(Paciente, {
  foreignKey: "pacienteId",
  targetKey: "id",
});

// Un Consultorio pertenece a un Medico
Consultorio.belongsTo(Medic, {
  foreignKey: "medicId",
  targetKey: "id",
});
// Un Medico tiene un Consultorio
Medic.hasOne(Consultorio, {
  foreignKey: "medicId",
  sourceKey: "id",
});

export { Medic, Consultorio, Paciente, Pago, Cita };





















/*import Medic from "./Medic.js";
import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import Pago from "./Pago.js";

// Definir las relaciones
Medic.hasMany(Consultorio, { foreignKey: "medicId" });
Consultorio.belongsTo(Medic, { foreignKey: "medicId" });

Paciente.hasMany(Pago, { foreignKey: "pacienteId" });
Pago.belongsTo(Paciente, { foreignKey: "pacienteId" });

export { Medic, Consultorio, Paciente, Pago };*/
