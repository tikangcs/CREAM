import React, { Fragment, useEffect } from "react";
import OverviewContainer from "../containers/overview/OverviewContainer";
import OutfitsContainer from "../containers/outfits/OutfitsContainer";
import ReviewsContainer from "../containers/reviews/ReviewsContainer";
import QAContainer from "../containers/qa/QAContainer";
import SocialMediaIcons from "./overview/SocialMediaIcons.js";
import MainPageContainer from "../containers/overview/MainPageContainer";

var App = ({ viewMainPage }) => {
  useEffect(() => {}, [viewMainPage]);

  return (
    <Fragment>
      {viewMainPage ? (
        <MainPageContainer />
      ) : (
        <div id="overall-container">
          <div className="saleBanner">
            <div>
              <b>SUMMER SALE</b> - UP TO <b>75% OFF</b> | <b>FREE</b> SHIPPING
              ON ORDERS $75+ | <b>FREE</b> PICKUP IN STORE
            </div>
          </div>
          <OverviewContainer />
          {/* <OutfitsContainer async />
            <ReviewsContainer />
            <QAContainer /> */}
          <SocialMediaIcons />
        </div>
      )}
    </Fragment>
  );
};

export default App;
