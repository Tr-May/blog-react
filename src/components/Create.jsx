import React from "react";
import { AiFillSave } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";

const Create = ({
  saveTitleToState,
  saveContentToState,
  savePost,
  cancelCreate,
  getTitle,
  getContent,
}) => {
  return (
    <form className="container mt-3 w-50 mx-auto">
      <h1 className="my-5 text-center">Create New Post</h1>
      <input
        type="text"
        ref={getTitle}
        onChange={saveTitleToState}
        placeholder="title"
        className="form-control"
      />
      <br />
      <br />
      <textarea
        ref={getContent}
        onChange={saveContentToState}
        placeholder="content"
        className="form-control"
      ></textarea>
      <br />
      <br />
      <button className="btn btn-success me-2" onClick={savePost}>
        <AiFillSave /> Save Post
      </button>
      <button className="btn btn-danger" onClick={cancelCreate}>
        <TiCancel /> Cancel
      </button>
    </form>
  );
};

export default Create;
