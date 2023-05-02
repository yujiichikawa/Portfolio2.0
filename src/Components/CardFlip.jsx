import "../styles/CardFlip.css";

const CardFlip = () => {
  return (
    <div className="cards-grid">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front card1"
          ></div>
          <div className="flip-card-back">
            React
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front card2"
          ></div>
          <div className="flip-card-back">
            Tailwindcss
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
