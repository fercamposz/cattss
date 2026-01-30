import cats from "../data/Cats";
import { IoMoon, IoSunny } from "react-icons/io5";

function StatusBar({ totalFavs, onToggleTema, tema }) {
  return (
    <section className="status-container">
      <div className="status-bar-pill">
        <span>
          <strong>{cats.length}</strong> Gatinhos disponíveis
        </span>

        <span>
          <strong>{totalFavs}</strong> Favoritados
        </span>

        <span>Adote com amor :D</span>
      </div>

      <button
        className={`theme-toggle-btn ${tema}`}
        onClick={onToggleTema}
      >
        <div className="icon-wrapper">
          {tema === "light" ? <IoMoon /> : <IoSunny />}
        </div>

        <span>
          {tema === "light" ? "Escuro" : "Claro"}
        </span>
      </button>
    </section>
  );
}

export { StatusBar };
