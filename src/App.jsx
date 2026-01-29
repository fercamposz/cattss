import { useState } from "react";
import cats from "./data/Cats";
import StatusBar from "./components/StatusBar";
import CardCats from "./components/CardCats";
import Modal from "./components/Modal"; 
import "./App.css";
import gatofone from "./assets/gatofone.svg"

export default function App() {
  const [totalFavs, setTotalFavs] = useState(0);
  const [busca, setBusca] = useState("");
  const [tema, setTema] = useState("light");
  const [gatoSelecionado, setGatoSelecionado] = useState(null);

  const gatosFiltrados = cats.filter((cat) =>
    cat.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-container" data-theme={tema}>
      <StatusBar 
        totalFavs={totalFavs} 
        tema={tema} 
        onToggleTema={() => setTema(tema === "light" ? "dark" : "light")} 
      />

      <header className="hero">
        <div className="hero-text">
          <h1>ADOTE GATINHOS AQUI!!</h1>
          <div className="search-container">
            <span className="paw-icon">🐾</span>
            <input 
              type="text" 
              placeholder="Search..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
         <img src={gatofone} alt= "gato de fone"/>
      </header>

      <h2 className="main-title">Gatinhos</h2>

      <main className="catalog-grid">
        {gatosFiltrados.map((cat) => (
          <CardCats 
            key={cat.id} 
            cat={cat} 
            onFavoritar={(v) => setTotalFavs(prev => prev + v)} 
            onAdotar={setGatoSelecionado}
          />
        ))}
      </main>

      {gatoSelecionado && (
        <Modal 
          cat={gatoSelecionado} 
          onClose={() => setGatoSelecionado(null)} 
        />
      )}
    </div>
  );
}