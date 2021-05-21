import React, { useState, useEffect } from "react";
import CarouselContainer from "../../containers/outfits/CarouselContainer";

const RelatedItems = ({ fetchRelated, relatedProducts }) => {
  return (
    <section id="related-products" role="grid">
      <div className="related-container">
        <h1 className="related-products-title">
          <b>Related Products</b>
        </h1>
        <h3 className="related-products-subtitle">
          Browse through similar trending products
        </h3>
      </div>
      <CarouselContainer className="carousel" outfits={false} />
      <div className="related-container">
        <h1 className="outfits-title">Your Outfit</h1>
        <h3>Personalized collection of your favorites</h3>
      </div>
      <CarouselContainer className="carousel outfits" outfits={true} />
    </section>
  );
};

export default RelatedItems;
