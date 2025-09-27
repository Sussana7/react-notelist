import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* Default page showing all notes */}
          <Route path="/" element={<NoteList />} />

          {/* Page for editing a single note */}
          <Route path="/edit:id" element={<NoteEditor />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
