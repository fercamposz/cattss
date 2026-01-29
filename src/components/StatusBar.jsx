import React from 'react';
import cats from "../data/Cats";

export default function StatusBar({ totalFavs, onToggleTema, tema }) {
  return (
    <section className="status-container">
      <div className="status-bar-pill">
        <span><strong>{cats.length}</strong> Gatinhos disponíveis</span>
        <span className="divider">|</span>
        <span><strong>{totalFavs}</strong> Favoritados</span>
        <span className="divider">|</span>
        <span>Adote com amor :D</span>
      </div>
      <button className="theme-toggle-btn" onClick={onToggleTema}>
        {tema === 'light' ? '🌙' : '☀️'}
      </button>
    </section>
  );
}