import "./Integration.css";

function Integration() {

  const integrations = [
    {
      title: "BigCommerce",
      image: "/bigcommerce.png",
      bg: "#F3F3F3",
      color: "#222"
    },
    {
      title: "Shopify",
      image: "/shopify.png",
      bg: "#E8FFE8",
      color: "#5B8A3C"
    },
    {
      title: "Custom",
      image: "/custom.png",
      bg: "#EAF4FF",
      color: "#4169E1"
    },
    {
      title: "WooCommerce",
      image: "/woo.png",
      bg: "#e2d9fb",
      color: "#884d83"
    }
  ];

  return (
    <section className="integration">

      <h3>Integration</h3>

      <p>
        Power your store with KR Customizer's smooth integrations
      </p>

      <div className="integration-grid">

        {integrations.map((item, index) => (

          <div
            key={index}
            className="integration-card"
            style={{ background: item.bg }}
          >

            <h3 style={{ color: item.color }}>
              {item.title}
            </h3>

            <img
              src={item.image}
              alt={item.title}
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Integration;