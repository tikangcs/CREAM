import React, { useState, useEffect } from "react";
import ExpandedGalleryContainer from "../../containers/overview/ExpandedGalleryContainer.js";
import DefaultGalleryContainer from "../../containers/overview/DefaultGalleryContainer.js";
import NavContainer from "../../containers/overview/NavContainer.js";

const Overview = ({ expand, product, fetchProduct }) => {
  return (
    <div id="parent-overview">
      <NavContainer />
      {expand ? <ExpandedGalleryContainer /> : <DefaultGalleryContainer />}
      <div className="overview-description">
        <h3 className="product-description">{product.description || ""} </h3>
        {product.features ? (
          <ul className="product-features-list">
            {product.features.map((feature, i) => {
              return (
                <li key={`${i}-feature`}>
                  <i className="fas fa-check"></i>
                  <b>{feature.feature}</b>: {feature.value}
                </li>
              );
            })}
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Overview;
