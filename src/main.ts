import { Role, type User } from "./interfaces/user.interface";

// 1. Declaración de variables y tipos primitivos
const systemName: string = "SENA ADSO Core";
const versionNumber: number = 1.0;
const isSystemActive: boolean = true;
const totalLearners: number = 28;

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
const { name: secondName, role: secondRole } = secondUser;

console.log(`Primer usuario extraído: ${firstName} (${firstEmail})`);
console.log(`Segundo usuario extraído: ${secondName} - Rol: ${secondRole}`);

// 2. Manipulación de Arreglos (filter & map)
const activeUsers = users.filter(user => user.isActive);
const userEmails = users.map(user => user.email.toLowerCase());

console.log("Usuarios Activos:", activeUsers);
console.log("Lista completa de correos:", userEmails);
// Ciclo 4 — Funciones y Múltiples Retornos

import { countUsersByStatus, getUserSummary } from "./services/user.service";

// Probar estadísticas
const stats = countUsersByStatus(users);
console.log(`Estadísticas de usuarios -> Activos: ${stats.active} | Inactivos: ${stats.inactive}`);

// Probar retorno múltiple (tupla)
const [userName, userRole, status] = getUserSummary(firstUser);
console.log(`Resumen -> Usuario: ${userName}, Rol: ${userRole}, Estado: ${status}`);


//  Ciclo 5 — Asincronía, Fetch API y Async/Await

import { fetchUsersFromAPI } from "./services/api.service";

const initApp = async () => {
    console.log("🚀 Iniciando aplicación...");

    const externalUsers = await fetchUsersFromAPI();

    console.log(`✅ Se recibieron ${externalUsers.length} usuarios desde el servidor.`);
    console.table(externalUsers.map(u => ({ ID: u.id, Nombre: u.name, Email: u.email })));
};

initApp();
