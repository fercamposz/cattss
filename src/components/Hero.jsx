export default function Hero({ busca, setBusca, gatoFone }) {
  return (
    <header className="hero">
     
      <div className="heroContent">
        <h1>ADOTE GATINHOS</h1>
      </div>


      <div className="heroImage">
        <img src={gatoFone} alt="Gato de fone" />
      </div>

     
      <div className="heroContainer">
    
        <div className="searchBox">

          <span className="searchIcon">🐾</span>
          
          
          <input
            type="text"
            placeholder="Buscar gatinho..."
            className="searchInput"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}