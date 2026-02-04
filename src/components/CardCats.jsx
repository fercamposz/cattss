import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function CardCats({ cat, onFavoritar, onAdotar }) {
  const [isFav, setIsFav] = useState(false);

  function handleFavoritar() {
    const novoEstado = !isFav;
    setIsFav(novoEstado);
    onFavoritar(novoEstado ? 1 : -1);
  }
  return (
    <article className="catCard">
 
      <button
        className={`favBtn ${isFav ? "active" : ""}`}
        onClick={handleFavoritar}
      >
        {isFav ? <FaStar /> : <FaRegStar />}
      </button>
   
      <figure className="catImageContainer">
        <img src={cat.image} alt={cat.name} />
      </figure>
     
      <div className="catInfo">
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
      
        <button
          className="adoptBtn"
          onClick={() => onAdotar(cat)}
        >
          Adotar
        </button>
      </div>
    </article>
  );
}