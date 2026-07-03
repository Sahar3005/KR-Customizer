import "./Features.css";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">

      <div className="features-heading">
        <h4>FEATURES</h4>

        <h2>
          <span>Turn Every Click</span>
          Into a <br /> Custom Purchase
        </h2>
      </div>

      <FeatureCard
        image="/shopping1.png"
        icon="/icon.png"
        tag="TURN CREATIVITY INTO SALES"
        title="Custom products that customers can't resist"
        description="Create unique personalized gifts with our product customizer. Boost sales and delight customers with products they'll love."
      />

      <FeatureCard
        reverse={true}
        image="/shopping.png"
        icon="/icon.png"
        tag="MAKE EVERY PRODUCT ONE OF A KIND"
        title="Transform Shopping into an Experience with Real-Time Personalization"
        description="Delight shoppers with real-time previews and easy customization tools. Build trust and excitement through a seamless buying experience."
      />

      <FeatureCard
        image="/shopping2.png"
        icon="/icon.png"
        tag="WORK SMARTER, GROW FASTER"
        title="Smart Automation for Smarter Growth"
        description="KR Customizer automates your workflows from print-ready files to seamless POD integration. Design once, sell everywhere, and grow with ease."
      />

    </section>
  );
}

export default Features;