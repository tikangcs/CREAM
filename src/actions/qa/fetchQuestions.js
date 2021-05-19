import axios from "axios";
import setQuestions from "./setQuestions.js";
import store from "../../store/store.js";

var fetchReviews = (productId, page = 1, count = 5) => {
  return (dispatch) => {
    axios
      .get(`/qa/questions?product_id=${productId}&page=${page}&count=${count}`)
      .then(({ data }) => {
        dispatch(setQuestions(data));
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
};

export default fetchReviews;
