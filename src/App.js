import React, {useState} from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostChooser from "./components/PostChooser";

function App() {
  const [postNumber, setPostNumber] = useState(0)
  return <div className="App">
    <PostList postNumber={postNumber}/>
    <PostChooser setPostNumber={setPostNumber}/>
  </div>;
}

export default App;
