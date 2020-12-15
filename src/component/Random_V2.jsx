import React from "react";
import useGif from "../useGif";
import "../App.css";

const Tag = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img className="gif" src={gif} alt="random gif" />
      <button onClick={fetchGif}>Click for New</button>
    </div>
  );
};

export default Tag;
