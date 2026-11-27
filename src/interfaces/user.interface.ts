// src/interfaces/user.interface.ts

export const Role = {
    ADMIN: "ADMINISTRADOR",
    INSTRUCTOR: "INSTRUCTOR",
    LEARNER: "APRENDIZ",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export interface User {
    readonly id: number;
    name: string;
    email: string;
    role: Role;
    isActive: boolean;
    age?: number; // Propiedad opcional
}
