import React from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";

import "./Header.css";

const Header = ({onShowModal}) => {
  return (
    <header className="navbar-header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
      <p >
        <button className="header-button" onClick={onShowModal}>
          <MdPostAdd size={22} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default Header;
