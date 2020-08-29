import React from "react";
import PropTypes from "prop-types";

const Cart = ({ cartList }) => {
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        {cartList.length ? (
          cartList.map((product) => (
            <div className="cart-container">
              <img
                alt={product.name}
                className="image-cart"
                src={product.image}
              />
              <div>{product.name}</div>
              <div>{product.desd}</div>
              <div>{product.price}</div>
            </div>
          ))
        ) : (
          <div>There is no product in cart right now</div>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  cartList: PropTypes.array,
};

export default Cart;
