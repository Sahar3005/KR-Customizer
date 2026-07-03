import { useEffect, useState } from "react";
import "./Industry.css";

function Industry() {

  const [active, setActive] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setActive((prev) => (prev + 1) % 4);

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="industry-section" id="industry">

      <div className="industry-left">

        <h1>
          KR Customizer Helps Every
          <br />
          Industry Sell Smarter
        </h1>

        <div className={`industry ${active===0 ? "active":""}`}>
          <h2>Fashion & Apparel</h2>
          <h4>STYLE MADE PERSONAL</h4>
          <p>
            Let customers design outfits their way with instant
            customization colors, patterns and text that update live.
          </p>
        </div>

        <div className={`industry ${active===1 ? "active":""}`}>
          <h2>Jewelry & Accessories</h2>
          <h4>EVERY PIECE TELLS A STORY</h4>
          <p>
            Personalized engraving and custom jewellery designs
            for every occasion.
          </p>
        </div>

        <div className={`industry ${active===2 ? "active":""}`}>
          <h2>E-Commerce & Retail</h2>
          <h4>FROM ORDINARY TO EXTRAORDINARY</h4>
          <p>
            Boost sales with customized gifts and products
            instantly.
          </p>
        </div>

        <div className={`industry ${active===3 ? "active":""}`}>
          <h2>Automotive</h2>
          <h4>DRIVE IT YOUR WAY</h4>
          <p>
            Encourage customers to personalize interiors,
            finishes and accessories.
          </p>
        </div>

      </div>

      <div className="industry-right">

        <img
          src="/laptop.png"
          alt="Laptop"
          className="industry-image"
        />

      </div>

    </section>

  );
}

export default Industry;