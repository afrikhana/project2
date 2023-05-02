import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        <span role="img" aria-label="like">❤️</span> Like {count}
      </button>
    </div>
  );
}
export default LikeButton;