// src/services/user.service.ts
import type { Role, User } from "../interfaces/user.interface";

// Función flecha con tipo de retorno explícito
export const countUsersByStatus = (usersList: User[]): { active: number; inactive: number } => {
    const active = usersList.filter(u => u.isActive).length;
    const inactive = usersList.length - active;

    return { active, inactive };
};

// Función con retorno múltiple mediante Tupla
export const getUserSummary = (user: User): [string, Role, boolean] => {
    return [user.name, user.role, user.isActive];
};