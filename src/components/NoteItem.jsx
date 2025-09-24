import React from "react";
import NoteList from "./NoteList";
function NoteItem({title,content}) {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-800 text-blue-500">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
export default NoteItem;
