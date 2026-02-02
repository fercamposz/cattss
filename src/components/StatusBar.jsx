import cats from "../data/Cats";
import { IoMoon, IoSunny } from "react-icons/io5";

export function StatusBar({ totalFavs, onToggleTema, tema }) {
  return (
    <section className="statusContainer">
   
      <div className="statusBarPill">
        <span>
          <strong>{cats.length}</strong> Gatinhos disponíveis
        </span>

        <span>
          <strong>{totalFavs}</strong> Favoritados
        </span>

        <span>Adote com amor :D</span>
      </div>

      <button
    
        className={`themeToggleBtn ${tema}`}
        onClick={onToggleTema}
      >
      
        <div className="iconWrapper">
          {tema === "light" ? <IoMoon /> : <IoSunny />}
        </div>

        <span>
          {tema === "light" ? "Escuro" : "Claro"}
        </span>
      </button>
    </section>
  );
}