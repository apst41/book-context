import { useState } from "react";
import useBookContext from "../hooks/BookContext";

// eslint-disable-next-line react/prop-types
export default function BookEdit({ book, onSubmit }) {
  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(book.title);

    const { editBookById } = useBookContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    // eslint-disable-next-line react/prop-types
      editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
