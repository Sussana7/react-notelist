import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Trash2 } from "lucide-react";

function NoteEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log("Saving note:", { title, content });
  };

  const handleDelete = () => {
    console.log("Deleting note");
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <Save size={16} />
            Save
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-yellow-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-bold bg-transparent border-none outline-none placeholder-gray-500 mb-4 text-white"
        />

        <textarea
          placeholder="Start typing your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 w-full bg-transparent border-none outline-none resize-none placeholder-gray-500 text-white leading-relaxed"
        />
      </div>
    </div>
  );
}

export default NoteEditor;
