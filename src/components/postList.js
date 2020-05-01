import React, { useState, useEffect, useRef } from "react";
import * as utils from "./utils";

export default function PostList() {
  const [posts] = useState(utils.postData());

  const [loading, setLoading] = useState(true);

  return <div></div>;
}
