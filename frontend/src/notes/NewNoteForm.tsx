import useNewNoteForm from "./useNewNoteForm";

const NewNoteForm: React.FC = () => {
    const {
        userInput,
        onTitleChange,
        onDescriptionChange,
        onSubmit,
        requestError,
        validationError,
    } = useNewNoteForm();

    return (
        <div className="p-1 flex items-center">
            <form onSubmit={onSubmit}>
                <label className="mr-4">
                    <span className="pr-1">
                        Title:
                    </span>
                    <input onChange={onTitleChange} value={userInput.title} />
                </label>
                <label className="mr-4">
                    <span className="pr-1">
                        Description:
                    </span>
                    <input onChange={onDescriptionChange} value={userInput.description} />
                </label>

                <button className="border-1 px-2 py-1 cursor-pointer" type="submit">Add note</button>
                {validationError && <p style={{ color: "red" }}>{validationError}</p>}
                {requestError ? <p>{requestError.message}</p> : null}
            </form>
        </div>
    );
}

export default NewNoteForm;
