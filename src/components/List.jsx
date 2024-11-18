import React, { useState, useEffect, useRef } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import { AiOutlinePlus } from "react-icons/ai";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState("");

  //initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: Date.now(), title, content }]);

    getTitle.current.value = "";
    getContent.current.value = "";

    toggleCreate();
  };

  const cancelCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const editPost = (id) => {
    setIsEdit(true);
    setEditId(id);
  };

  const updatePost = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const updatedPosts = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPosts);
  };

  const cancelEdit = () => {
    setIsEdit(!isEdit);
  };

  const deletePost = (id) => {
    const modifiedPost = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPost);
  };

  if (isCreate) {
    return (
      <>
        <Create
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          savePost={savePost}
          cancelCreate={cancelCreate}
          getTitle={getTitle}
          getContent={getContent}
        />
      </>
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        post={post}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        updatePost={updatePost}
        cancelEdit={cancelEdit}
      />
    );
  } else {
    if (posts.length === 0) {
      return (
        <div className="container mx-auto my-5 text-center">
          <h1 className="text-center">All Posts</h1>
          <h2 className="text-center text-danger py-3">No post to show!</h2>
          <button className="btn btn-primary" onClick={toggleCreate}>
            <AiOutlinePlus /> Create New Post
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="text-center my-3">Blog Posts</h1>
          <table className="table table-hover w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                    editPost={editPost}
                    deletePost={deletePost}
                  />
                );
              })}
            </tbody>
          </table>
          <br />
          <button
            className="btn btn-primary"
            onClick={toggleCreate}
            style={{ marginLeft: "150px" }}
          >
            <AiOutlinePlus /> Create New Post
          </button>
        </div>
      );
    }
  }
};
export default List;
