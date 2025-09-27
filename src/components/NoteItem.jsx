import React from "react";

function NoteItem({ id, title, content, onNoteClick }) {
  const truncatedContent =
    content && content.length > 50
      ? content.substring(0, 50) + "..."
      : content;

  return (
    <div
      className="bg-gray-800 text-white p-3 rounded mb-2 cursor-pointer hover:bg-gray-700 transition-colors"
      onClick={() => onNoteClick && onNoteClick(id)}
    >
      <h4 className="font-bold text-blue-400 mb-1">
        {title || "Untitled Note"}
      </h4>
      <p className="text-sm text-gray-300 line-clamp-2">
        {truncatedContent || "No content"}
      </p>
    </div>
  );
}

export default NoteItem;
