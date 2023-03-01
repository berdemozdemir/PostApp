import React, { useState } from "react";

import "./NewPost.css";
import Modal from "./Modal";

const NewPost = ({onAddPost, onCancel}) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody
    }
    onAddPost(postData)
    onCancel()
  }

  return (
      <form className="form" onSubmit={submitHandler}>
        <p>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            required
            rows={3}
            onChange={bodyChangeHandler}
          ></textarea>
        </p>
        <p>
          <label htmlFor="author">Author</label>
          <input id="author" required onChange={authorChangeHandler}></input>
        </p>
        <p className="actions">
          <button onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
  );
};

export default NewPost;
