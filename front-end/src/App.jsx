import { useState } from "react";

import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true)
  }

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
      <Header onShowModal={showModalHandler}/>
      <PostList onCloseModal={hideModalHandler} isPosting={modalIsVisible}/>
    </>
  );
}

export default App;
