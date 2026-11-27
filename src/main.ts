import { Role, type User } from "./interfaces/user.interface";

// 1. Declaración de variables y tipos primitivos
const systemName: string = "SENA ADSO Core";
const versionNumber: number = 1.0;
let isSystemActive: boolean = true;
let totalLearners: number = 28;

// 2. Uso de Template Strings
const systemSummary: string = `
========================================
🚀 SISTEMA: ${systemName} (v${versionNumber})
📊 Estado: ${isSystemActive ? "Activo" : "Inactivo"}
👥 Aprendices inscritos: ${totalLearners}
========================================
`;

console.log(systemSummary);

// Ciclo 2 — Interfaces y Enumeraciones (enums)

const instructor: User = {
    id: 1,
    name: "Pedro Pimienta",
    email: "pedro@sena.edu.co",
    role: Role.INSTRUCTOR,
    isActive: true,
    age: 28
};

const learner1: User = {
    id: 2,
    name: "María López",
    email: "maria@sena.edu.co",
    role: Role.LEARNER,
    isActive: true
};

console.log("Instructor registrado:", instructor);
console.log(`Aprendiz: ${learner1.name} | Rol: ${learner1.role}`);
