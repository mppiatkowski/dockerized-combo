import type { Note } from "../utils/fetchService";

export type IOwnProps = {
    data: Note,
}

const NoteDetails: React.FC<IOwnProps> = ({
    data,
}) => {

    return (
        <div className="p-1 bg-sky-700">
            <p>
                Title:<br />
                <span className="font-bold">
                    {data.title}
                </span>
            </p>
            <p>
                Description:<br />
                <span className="font-bold">
                    {data.description}
                </span>
            </p>
        </div>
    );
}

export default NoteDetails;
