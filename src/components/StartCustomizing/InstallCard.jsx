import { useState } from "react";

function InstallCard() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="install-card">

      <div className="install-logo">
        <img
          src="/logo1.png"
          alt="logo"
        />
        <h3>KR Customizer</h3>
      </div>

      <hr />

      <div className="install-details">

        <p>Pricing</p>
        <h2>Free</h2>

        <p>Rating</p>

        <div className="stars">

          {[1, 2, 3, 4, 5].map((star) => (

            <span
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              style={{
                cursor: "pointer",
                color: star <= (hover || rating) ? "#FFD700" : "#ccc",
                fontSize: "30px",
                transition: "0.2s"
              }}
            >
              ★
            </span>

          ))}

        </div>

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          {rating > 0 ? `Your Rating: ${rating}/5` : "Click to rate"}
        </p>

        <p>Developer</p>
        <h4>Krcustomizer</h4>

      </div>

      <button
        onClick={() =>
          window.open(
            "https://play.google.com/store/games?hl=en_IN",
            "_blank"
          )
        }
      >
        INSTALL
      </button>

    </div>
  );
}

export default InstallCard;