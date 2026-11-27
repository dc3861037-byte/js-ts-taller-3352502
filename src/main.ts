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

// 3. Arreglos y Métodos de Arreglos

const users: User[] = [
    { id: 1, name: "Pedro Pimienta", email: "pedro@sena.edu.co", role: Role.INSTRUCTOR, isActive: true },
    { id: 2, name: "Maria López", email: "maria@sena.edu.co", role: Role.LEARNER, isActive: true },
    { id: 3, name: "Juan Pérez", email: "juan@sena.edu.co", role: Role.LEARNER, isActive: false },
    { id: 4, name: "Ana Gomez", email: "ana@sena.edu.co", role: Role.ADMIN, isActive: true }
];

// 1. Desestructuración de Objetos y Arreglos
const [firstUser, secondUser] = users;
const { name: firstName, email: firstEmail } = firstUser;

console.log(`Primer usuario extraído: ${firstName} (${firstEmail})`);

// 2. Manipulación de Arreglos (filter & map)
const activeUsers = users.filter(user => user.isActive);
const userEmails = users.map(user => user.email.toLowerCase());

console.log("Usuarios Activos:", activeUsers);
console.log("Lista completa de correos:", userEmails);
