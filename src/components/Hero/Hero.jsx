import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-subtitle">
          BRING PRODUCTS TO LIFE WITH KR CUSTOMIZER
        </p>

        <h3>
          Transform <span>Personalization</span>
          <br />
          Experience with Next-Level
          <br />
          Product <span>Customization</span>
        </h3>

        <div className="hero-points">
          <p>✔ Offer unique</p>
          <p>✔ Customized products with ease</p>
          <p>✔ Streamline custom orders</p>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            REQUEST A DEMO
          </button>

          <button className="secondary-btn">
            TRY FOR FREE
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img
          src="/love.png"
          alt="Hero"
        />
      </div>

    </section>
  );
}

export default Hero;