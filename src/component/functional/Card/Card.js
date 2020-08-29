import PropTypes from "prop-types";
import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img alt={product.name} src={product.image} />
          {product.addToCart ? (
            <button
              className="cart-button"
              disabled
            >
              In Cart
            </button>
          ) : (
            <button
              className="cart-button"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          )}
        </div>
        <div className="prod-desc-container">
          <div className="prod-name">{product.name}</div>
          <div className="prod-desc">{product.desd}</div>
          <div className="prod-price">
            ${product.price ? product.price : 100}
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
