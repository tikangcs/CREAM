import React from "react";
import getFeatures from "./utils.jsx";

const Comparison = ({ product, currentProduct }) => {
  const features = getFeatures(product.features, currentProduct.features);
  return (
    <React.Fragment>
      <h5 className="table-heading">Comparing</h5>
      <table>
        <tbody>
          <tr>
            <th className="table-product">{product.name}</th>
            <th>&nbsp;</th>
            <th className="table-currentProduct">{currentProduct.name}</th>
          </tr>
          {features.map((feature, index) => {
            return (
              <tr key={index}>
                <td className="table-product">{feature.product}</td>
                <td className="table-feature">{feature.feature}</td>
                <td className="table-currentProduct">
                  {feature.currentProduct}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Comparison;
