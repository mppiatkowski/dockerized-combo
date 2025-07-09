import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { addNote } from "../utils/fetchService";
import { queryKeys } from "../utils/queryKeys";
import { noteSchema } from "../utils/noteSchema";

const useNewNoteForm = () => {
    const queryClient = useQueryClient();

    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
    })

    const [validationError, setValidationError] = useState<string | null>(null);

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
        setValidationError(null);

        const parseResult = noteSchema.safeParse(userInput);
        if (!parseResult.success) {
            setValidationError(parseResult.error.errors[0].message);
            return;
        }

        mutation.mutate(userInput);
    };

    return {
        userInput,
        onTitleChange,
        onDescriptionChange,
        onSubmit,
        validationError,
        requestError: mutation.error,
    };
}

export default useNewNoteForm;
