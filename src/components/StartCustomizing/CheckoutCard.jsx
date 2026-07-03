import { useState, useEffect } from "react";

function CheckoutCard({ selectedProduct }) {

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [selectedProduct]);

  const totalPrice = (
    parseFloat(selectedProduct.price.replace("$", "")) * quantity
  ).toFixed(2);

  return (
    <div className="checkout-card">

      <div className="checkout-top">

        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />

        <div className="checkout-info">

          <h2>${totalPrice}</h2>

          <div className="quantity">

            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

          </div>

          <p><b>Size:</b> {selectedProduct.size}</p>

          <p><b>Color:</b> {selectedProduct.color}</p>

        </div>

      </div>

      <h4>{selectedProduct.name}</h4>

      <button className="checkout-button">
        CHECKOUT
      </button>

    </div>
  );
}

export default CheckoutCard;