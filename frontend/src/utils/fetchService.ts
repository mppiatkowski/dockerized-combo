import { getErrorMessage } from "./errorMessage";

const URL = 'http://localhost:8080'

export type Note = {
    id: number;
    title: string;
    description: string;
}

export const fetchAllNotes = async (): Promise<Note[]> => {
    try {
        const response = await fetch(`${URL}/notes`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        return data;
        
    } catch (error) {
        console.error('Fetch failed', getErrorMessage(error));
        return [];
    }
};