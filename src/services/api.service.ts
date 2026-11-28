// src/services/api.service.ts

export interface ExternalUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersFromAPI = async (): Promise<ExternalUser[]> => {
    try {
        console.log("⏳ Solicitando usuarios a la API...");
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }

        const data: ExternalUser[] = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Ocurrió un error al consultar la API:", error);
        return [];
    }
};