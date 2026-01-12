import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const desc = post.blogDescription.substring(0, 100) + "...";

  const getImageSrc = () => {
        if (post.image && post.fileType) {
            return `data:${post.fileType};base64,${post.image}`;
        }
        return null;
    };


  return (
    <div className="bg-white p-5 rounded-lg shadow transform ease-in hover:translate-y-[-5px]">
      <h1 className="text-2xl font-semibold mb-4">{post.blogTitle}</h1>
      {<img src={getImageSrc()} alt={post.blogTitle} />}
      <p className="mb-4">{desc}</p>
      <Link
        to={""}
        className="flex items-center space-x-5 text-earthy-red hover:w-30 hover:border-b hover:border-b-earthy-red"
      >
        <p className="font-medium">Read More</p>
        <p>
          <FaArrowRight />
        </p>
      </Link>
    </div>
  );
};

export default PostCard;
