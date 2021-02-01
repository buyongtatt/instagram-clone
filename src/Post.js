import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";

function Post({username, caption, imageUrl}) {
  
  return (
    <div className="post">
        <div className="post__header">
        <Avatar 
        className='post__avatar'
        alt='Bu Yong Tatt'
        src='/static/images/avatar/1.jpg'
        />
      <h3>{username}</h3>
        </div>
        
      {/* header -> avatar + username */}
      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
