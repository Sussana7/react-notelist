import { useState } from "react";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const NoteList = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const getNote = () => {
    return notes.map((note) => (
      <NoteItem
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        onNoteClick={(id) => navigate(`/edit/${id}`)}
      />
    ));
  };

  const addNewNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: "Note to Self 🌟",
      content: "Write your thoughts here...",
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-900 py-8">
      <div className="bg-yellow-500 text-black p-5 md:rounded-md md:w-[400px] md:h-[500px] w-full h-screen">
        <h3 className="font-serif mb-2">NoteList</h3>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search notes..."
            className="flex-1 h-[30px] rounded-md bg-white px-3 text-black"
          />
          <button
            onClick={addNewNote}
            className="w-[30px] h-[30px] bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-xl"
          >
            +
          </button>
        </div>

        {/* 🗒 Scrollable notes area */}
        <div className="w-full h-[80%] overflow-y-scroll p-3 bg-gray-700 rounded">
          {getNote()}
        </div>
      </div>
    </div>
  );
};

export default NoteList;
