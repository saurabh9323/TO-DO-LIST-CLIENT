import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import CreateArea from "./componenets/CreateArea";
import { useState, useEffect } from "react";
import Note from "./componenets/Note";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const addNote = async (newNote) => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, newNote);
      setNotes((prevNotes) => [...prevNotes, response.data]);
    } catch (error) {
      console.error("Error adding note:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex gap-10 flex-wrap">
        {notes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
