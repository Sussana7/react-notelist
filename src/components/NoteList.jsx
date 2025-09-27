import { useState } from "react";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const getNote = () => {
    const transformNotes = notes.map((note) => {
      return (
        <NoteItem key={note.id} title={note.title} content={note.content} />
      );
    });
    return transformNotes;
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
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="w-[300px] h-[500px] rounded-md p-5 bg-yellow-500 text-black">
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
        <div className="w-full h-[80%] overflow-y-scroll p-3 bg-gray-700 rounded">
          {getNote()}
        </div>
      </div>
    </div>
  );
};

export default NoteList;
