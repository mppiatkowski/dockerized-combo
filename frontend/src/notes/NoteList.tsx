import NoteDetails from "./NoteDetails";
import { useNoteList } from "./useNoteList";

const NoteList: React.FC = () => {
    const {
        data,
        selectedNote,
        setSelected,
    } = useNoteList();

    const onListItemClick = (id: number) => {
        if (selectedNote) {
            setSelected(selectedNote.id === id ? undefined : id);
            return;
        }
        setSelected(id);
    };
    return (
        <div className="flex">
            <ul className="pr-20 w-1/2">
                {data?.map((note) => <li 
                key={note.id} 
                onClick={() => onListItemClick(note.id)}
                className="p-1 cursor-pointer hover:bg-sky-700"
                >{note.title}</li>)}
            </ul>

            {selectedNote ? <div className="w-1/2">
                Selected note:
                <NoteDetails data={selectedNote} />
            </div> : null}
        </div>
    );
}

export default NoteList;
