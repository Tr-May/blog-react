import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";

const Edit = ({
  post,
  updatePost,
  saveTitleToState,
  saveContentToState,
  cancelEdit,
}) => {
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
        <button className="btn btn-success me-2" onClick={updatePost}>
          <AiFillEdit className="me-2" />
          Update Post
        </button>
        <button className="btn btn-danger" onClick={cancelEdit}>
          <TiCancel /> Cancel
        </button>
      </form>
    </>
  );
};

export default Edit;
