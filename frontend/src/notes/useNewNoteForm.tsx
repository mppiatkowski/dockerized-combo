import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { addNote } from "../utils/fetchService";
import { queryKeys } from "../utils/queryKeys";

const useNewNoteForm = () => {
    const queryClient = useQueryClient();

    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
    })

    const mutation = useMutation({
        mutationFn: ({ title, description }: { title: string, description: string }) => {
            return addNote({
                title,
                description,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKeys.getNotes] })
        },
    })


    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({
            title: event.target.value,
            description: userInput.description,
        });
    }

    const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({
            title: userInput.title,
            description: event.target.value,
        });
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutation.mutate({
            title: userInput.title,
            description: userInput.description,
        });
    };

    return {
        userInput,
        onTitleChange,
        onDescriptionChange,
        onSubmit,
        requestError: mutation.error,
    };
}

export default useNewNoteForm;
