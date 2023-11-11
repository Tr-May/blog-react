import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Post = ({ post, editPost, deletePost }) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>
        <button
          className="btn btn-primary me-3"
          onClick={() => editPost(post.id)}
        >
          <AiFillEdit />
        </button>
        <button className="btn btn-danger" onClick={() => deletePost(post.id)}>
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default Post;
