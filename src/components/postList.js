import React, { useState, useRef } from "react";
import * as utils from "../utils";
import SinglePost from "./SinglePost";

export default function PostList(props) {
  const { postNumber } = props;
  const [posts] = useState(utils.postData());

  const post = useRef(posts[postNumber]);

  return (
    <div className="PostList">
      <SinglePost post={post.current} />;
    </div>
  );
}
