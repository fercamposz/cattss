import { useState } from "react";
import CardCats from "./CardCats";

export default function Contador() {
  
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(0);
  function Favoritar() {
    setFav(!fav);
    setCount(count + 1)
  }


  return (
    <div className="contador">
      <p> Adoações: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
