export default function Modal({ cat, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Parabéns! 🐾</h2>
        <img src={cat.image} alt={cat.name} />
        <p>Você escolheu a <strong>{cat.name}</strong>. Entraremos em contato!</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}