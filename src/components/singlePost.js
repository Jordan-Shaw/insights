import React from "react";

export default function SinglePost(props) {
  const { title, imgSrc, href, text } = props.post;

  return (
    <div className="SinglePost">
      <div className="postContentContainer">
        <h4 className="title">
          <span className="highlight">{title}</span>
        </h4>

        <a href={href} className="link">
          {text}
        </a>
      </div>
      <img src={imgSrc} alt={title}></img>
    </div>
  );
}
