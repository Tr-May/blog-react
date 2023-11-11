import React from "react";
import { AiFillEdit } from "react-icons/ai";

const Edit = ({ post, updatePost, saveTitleToState, saveContentToState }) => {
  return (
    <>
      <form className="container mt-3 w-50 mx-auto">
        <h1 className="my-5 text-center">Edit Post</h1>
        <input
          type="text"
          defaultValue={post.title}
          placeholder="title"
          onChange={saveTitleToState}
          className="form-control"
        />
        <br />
        <br />
        <textarea
          defaultValue={post.content}
          placeholder="content"
          onChange={saveContentToState}
          className="form-control"
        ></textarea>
        <br />
        <br />
        <button className="btn btn-success" onClick={updatePost}>
          <AiFillEdit className="me-2" />
          Update Post
        </button>
      </form>
    </>
  );
};

export default Edit;
