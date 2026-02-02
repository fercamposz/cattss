import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (

    <div className="counterContainer">
      <p>Adoções: {count}</p>
      
      <button className="addBtn" onClick={handleClick}>
        +
      </button>
    </div>
  );
}