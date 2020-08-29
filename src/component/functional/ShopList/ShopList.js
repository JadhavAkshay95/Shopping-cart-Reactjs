import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";

const ShopList = ({ productList, addToCart }) => {
  const toCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <div className="shop-container">
        {productList.map((item) => (
          <Card key={item.id} product={item} addToCart={toCart} />
        ))}
      </div>
    </>
  );
};

ShopList.propTypes = {
  productList: PropTypes.array,
  addToCart: PropTypes.object,
};
export default ShopList;
