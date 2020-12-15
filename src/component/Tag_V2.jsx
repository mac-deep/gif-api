import React, { useState } from "react";
import useGif from "../useGif";
import "./style.css";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);
  const handleClick = (event) => {
    event.preventDefault();
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>{tag} Gif</h1>
      <img className="gif" src={gif} alt=" gif" />
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="eg. dogs, cats"
      />
      <button onClick={handleClick}>Click for New</button>
    </div>
  );
};

export default Tag;
