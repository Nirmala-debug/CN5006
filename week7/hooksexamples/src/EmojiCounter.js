import React, { useState, useEffect } from "react";
// Import images
import Love from './image/Love.png';
import Sad from './image/sad.png';
import Like from './image/like.png';
import Happy from './image/happy.png';

function EmojiCounter(props) {
  const [pic, setPic] = useState(Love); // Default to Love image
  const [count, setCount] = useState(0);

  // Update the image when `props.pic` changes
  useEffect(() => {
    console.log("Updating emoji to:", props.pic);

    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "sad") {
      setPic(Sad);
    } else if (props.pic === "happy") {
      setPic(Happy);
    }
  }, [props.pic]); // Add `props.pic` to the dependency array

  const clickHandle = () => {
    setCount(count + 1); // Increment count
  };

  return (
    <div className="App">
      <p>{props.pic}</p>
      <button onClick={clickHandle}>
        Click Counts are: {count}
        <img 
          src={pic} 
          alt={props.pic} 
          style={{ width: "20px", height: "20px", marginLeft: "10px", cursor: "pointer" }} 
        />
      </button>
    </div>
  );
}

export default EmojiCounter;
