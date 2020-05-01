import React, { useState, useEffect, useRef } from "react";
import * as utils from "./utils";
import "./App.css";

function App() {
  const [posts] = useState(utils.postData());
  const [loading, setLoading] = useState(true);
  const content = useRef(<h4>Loading...</h4>);

  useEffect(() => {
    console.log(posts);
    content.current = (
      <div>
        {posts.forEach((post) => {
          const { title, imgSrc, href, text } = post;
          return (
            <div>
              <h4>{title}</h4>
              <img src={imgSrc} alt={title}></img>
              <a href={href}>{text}</a>
            </div>
          );
        })}
      </div>
    );
    console.log('done')
    console.log(content.current)
  }, [posts]);

  return <div className="App">{content.current}</div>;
}

export default App;
