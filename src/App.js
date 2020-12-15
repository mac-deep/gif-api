import React from "react";
import "./App.css";
import Random from "./component/Random_V2";
import Tag from "./component/Tag_V2";

const App = () => {
  return (
    <div>
      <h1>Random GIF Application</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
