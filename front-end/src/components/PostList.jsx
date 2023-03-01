import React, { useEffect, useState } from "react";

import "./PostList.css";
import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

const PostList = ({ onCloseModal, isPosting }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    };
    fetchPost();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    setPosts((existingPosts) => {
      return [...existingPosts, postData];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onCancel={onCloseModal}>
          <NewPost onAddPost={addPostHandler} onCancel={onCloseModal} />
        </Modal>
      )}
      <ul className="posts">
        {posts.map((item, idx) => (
          <li key={item.idx}>
            <Post author={item.author} body={item.body} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
