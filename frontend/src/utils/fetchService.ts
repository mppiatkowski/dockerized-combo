import { getErrorMessage } from "./errorMessage";

const URL = 'http://localhost:8080'

export type Note = {
    id: number;
    title: string;
    description: string;
}

export type NoteBody = {
    title: string;
    description: string;
}

export const fetchAllNotes = async (): Promise<Note[]> => {
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
};

export const addNote = async (noteBody: NoteBody): Promise<Note[]> => {
    const response = await fetch(`${URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noteBody),
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error while trying to save: ${errorData}` || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json()
    return data;
};