function Hero({ busca, setBusca, gatoFone }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>ADOTE GATINHOS</h1>
      </div>

      <div className="hero-image">
        <img src={gatoFone} alt="Gato de fone" />
      </div>

      <div className="hero-container">
        <div className="search-box">
          <span className="search-icon">🐾</span>
          <input
            type="text"
            placeholder="Buscar gatinho..."
            className="search-input"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
