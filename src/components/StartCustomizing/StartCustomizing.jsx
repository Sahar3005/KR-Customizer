import "./StartCustomizing.css";
import { useState } from "react";
import InstallCard from "./InstallCard";
import ProductCard from "./ProductCard";
import LibraryCard from "./LibraryCard";
import CheckoutCard from "./CheckoutCard";

function StartCustomizing() {

  const products = [
    {
      name: "Men Solid Polo Neck T-Shirt",
      image: "/t-shirt1.png",
      price: "$18.99",
      size: "M",
      color: "Pink",
    },
    {
      name: "Unisex Round Neck T-Shirt",
      image: "/t-shirt2.png",
      price: "$20.99",
      size: "L",
      color: "White",
    },
    {
      name: "Diamond Ring",
      image: "/ring.png",
      price: "$22.95",
      size: "XL",
      color: "Silver",
    },
    {
      name: "White Sneakers",
      image: "/sneakers.png",
      price: "$35.99",
      size: "42",
      color: "White",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[2]);

  return (
    <section className="start">

      <h2>
        Start Customizing in
        <br />
        <span>Just Minutes</span>
      </h2>

      <p>Quick setup, no coding needed!</p>

      <div className="start-cards">

        <div className="card-step">
          <InstallCard />

          <div className="step">
            <h3>1</h3>
            <h4>Install KR Customizer</h4>
            <p>Add the customization tool to your store in a few clicks.</p>
          </div>
        </div>

        <div className="card-step">
          <ProductCard
            products={products}
            setSelectedProduct={setSelectedProduct}
          />

          <div className="step">
            <h3>2</h3>
            <h4>Pick Your Product</h4>
            <p>Pick a POD item or make your own mock-up to customize.</p>
          </div>
        </div>

        <div className="card-step">
          <LibraryCard />

          <div className="step">
            <h3>3</h3>
            <h4>Add Personalization</h4>
            <p>
              Explore our design library or craft one-of-a-kind custom options
              for your shoppers.
            </p>
          </div>
        </div>

        <div className="card-step">
          <CheckoutCard selectedProduct={selectedProduct} />

          <div className="step">
            <h3>4</h3>
            <h4>Launch and Sell</h4>
            <p>Publish your customized product and increase your sales.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default StartCustomizing;