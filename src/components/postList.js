import React, { useState } from "react";
import * as utils from "../utils";
import SinglePost from "./SinglePost";

export default function PostList() {
  const [posts] = useState(utils.postData());
  let firstDiv = [];
  let secondDiv = [];
  let thirdDiv = [];

  for (let i = 0; i < 3; i++) {
    firstDiv.push(posts[i])
  }

  for (let i = 3; i < 6; i++) {
    secondDiv.push(posts[i])
  }

  for (let i = 6; i < 9; i++) {
    thirdDiv.push(posts[i])
  }

  return (
    <div>
      <div className="PostList1">
        {firstDiv.map((post) => {
          return <SinglePost post={post} />;
        })}
      </div>
      <div className="PostList2">
        {secondDiv.map((post) => {
          return <SinglePost post={post} />;
        })}
      </div>
      <div className="PostList3">
        {thirdDiv.map((post) => {
          return <SinglePost post={post} />;
        })}
      </div>
      </div>
  );
}
