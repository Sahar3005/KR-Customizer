import { useState } from "react";

function ProductCard({ products, setSelectedProduct }) {

  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="product-card">

      <h4>Select Product</h4>

      <div className="product-grid">

        <div
  className={`product ${activeProduct === 0 ? "active" : ""}`}
  onClick={() => {
    setActiveProduct(0);
   setSelectedProduct(products[0]);
  }}
>
          <img src="/t-shirt1.png" alt="T-Shirt 1" />
          <p>Men Solid Polo Neck T-Shirt</p>
        </div>

       <div
  className={`product ${activeProduct === 1 ? "active" : ""}`}
  onClick={() => {
    setActiveProduct(1);
    setSelectedProduct(products[1]);
  }}
>
          <img src="/t-shirt2.png" alt="T-Shirt 2" />
          <p>Unisex Round Neck T-Shirt</p>
        </div>

        <div
  className={`product ${activeProduct === 2 ? "active" : ""}`}
  onClick={() => {
    setActiveProduct(2);
    setSelectedProduct(products[2]);
  }}
>
          <img src="/ring.png" alt="Ring" />
          <p>Diamond Ring</p>
        </div>

        <div
  className={`product ${activeProduct === 3 ? "active" : ""}`}
  onClick={() => {
    setActiveProduct(3);
    setSelectedProduct(products[3]);
  }}
>
          <img src="/sneakers.png" alt="Sneakers" />
          <p>White Sneakers</p>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;