import { useState } from "react";
import cats from "../data/Cats";
import { StatusBar } from "../components/StatusBar";
import CardCats from "../components/CardCats"; 
import CatCatalog from "../components/CatCatalog";
import ModalAdocao from "../components/ModalAdocao";
import pataImg from "../assets/pata.png";
import gatofone from "../assets/gatofone.svg";
import Hero from "../components/Hero";

export default function Home() {
  const [totalFavs, setTotalFavs] = useState(0);
  const [busca, setBusca] = useState("");
  const [tema, setTema] = useState("light");
  const [gatoSelecionado, setGatoSelecionado] = useState(null);

  const gatosFiltrados = cats.filter((cat) =>
    cat.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="appContainer" data-theme={tema}>
      <img src={pataImg} className="pata decor1" alt="pata" />

      <StatusBar
        totalFavs={totalFavs}
        tema={tema}
        onToggleTema={() => setTema(tema === "light" ? "dark" : "light")}
      />

      {/* Hero */}
      <Hero 
        busca={busca} 
        setBusca={setBusca} 
        gatoFone={gatofone} 
      />

      {/* MAIN */}
      <main>
        <h2 className="sectionTitle">Gatinhos</h2>

        {/* Sessão do catálogo */}
        <section className="catalog">
          {gatosFiltrados.map((cat) => (
            <CardCats
              key={cat.id}
              cat={cat}
              onFavoritar={(val) => setTotalFavs((prev) => prev + val)}
              onAdotar={setGatoSelecionado}
            />
          ))}
        </section>
      </main>

      <ModalAdocao
        cat={gatoSelecionado}
        onClose={() => setGatoSelecionado(null)}
      />
    </div>
  );
}