import { useQuery } from "@tanstack/react-query"
import { fetchAllNotes, type Note } from "../utils/fetchService"
import { useState } from "react"

export const useNoteList = () => {
    const {
        data,
    } = useQuery({
        queryKey: ['notes'],
        queryFn: fetchAllNotes,
    })

    const serverData: Note[] = data || []; 
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const selectedNote = serverData.find(item => item.id === selected); 

    return {
        data,
        selectedNote,
        setSelected,
    }
}
