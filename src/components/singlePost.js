import React from "react";

export default function SinglePost(props) {
  const { title, imgSrc, href, text } = props.post;
  return (
    <div className="SinglePost">
      <h4>{title}</h4>
      <img src={imgSrc} alt={title}></img>
      <a href={href}>{text}</a>
    </div>
  );
}
