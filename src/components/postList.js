import React, { useState } from "react";
import * as utils from "../utils";
import SinglePost from "./SinglePost";

export default function PostList() {
  const [posts] = useState(utils.postData());
  
  return (
    <div className="PostList">
      {posts.map((post) => {
        return <SinglePost post={post} />;
      })}
    </div>
  );
}
