import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Usando estrela como no Figma

export default function CardCats({ cat, onFavoritar, onAdotar }) {
  const [isFav, setIsFav] = useState(false);

  function handleFavoritar() {
    const novoEstado = !isFav;
    setIsFav(novoEstado);
    onFavoritar(novoEstado ? 1 : -1);
  }

  return (
    <div className="cat-card">
      <div className="cat-image-wrapper">
        <img src={cat.image} alt={cat.name} />
        <button 
          className={`fav-btn ${isFav ? "active" : ""}`} 
          onClick={handleFavoritar}
        >
          {isFav ? <FaStar /> : <FaRegStar />}
        </button>
      </div>
      <div className="cat-info">
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
        <button className="adopt-btn" onClick={() => onAdotar(cat)}>
          Adotar
        </button>
      </div>
    </div>
  );
}