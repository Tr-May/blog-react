import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Post = ({ post, editPost, deletePost }) => {
  return (
    <tr className="text-justify" style={{ lineHeight: 1.5 }}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td style={{ width: "150px" }}>
        <button
          className="btn btn-primary me-3"
          onClick={() => editPost(post.id)}
        >
          <AiFillEdit />
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this post?")) {
              deletePost(post.id);
            }
          }}
        >
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default Post;
