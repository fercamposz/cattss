export default function ModalAdocao({ cat, onClose }) {
  if (!cat) return null;

  function handleContentClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modalOverlay" onClick={onClose}>

      <div className="modalContent" onClick={handleContentClick}>
        
        <button className="closeModalBtn" onClick={onClose}>
          &times;
        </button>

        <h2>Ótima escolha! 🐾</h2>

        <figure>
          <img src={cat.image} alt={cat.name} className="modalImg" />
        </figure>

        <p>
          Você iniciou o processo para adotar <strong>{cat.name}</strong>!
        </p>

        <button className="confirmBtn" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}