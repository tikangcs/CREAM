import React, { Fragment } from "react";

let ProductInfo = ({ product, currentStyle }) => {
  return (
    <Fragment>
      <p style={{ fontSize: 16 }}>{product.category}</p>
      <h2>
        <strong>{product.name}</strong>
      </h2>
      {currentStyle.sale_price ? (
        <div style={{ color: "red" }}>
          ${currentStyle.sale_price}
          <p style={{ textDecoration: "line-through", color: "black" }}>
            ${currentStyle.original_price}
          </p>
        </div>
      ) : (
        <p>${currentStyle.original_price}</p>
      )}
      <p style={{ fontSize: 20 }}>
        Selected Style {`>`}
        <br />
        <strong>{currentStyle.name}</strong>{" "}
      </p>
    </Fragment>
  );
};

export default ProductInfo;
