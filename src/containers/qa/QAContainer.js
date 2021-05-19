import { connect, dispatch } from "react-redux";
import QA from "../../components/qa";
import fetchQuestions from "../../actions/qa/fetchQuestions";
import handleProductSelect from "../../actions/handleProductSelect";

var mapStoreToProps = (state) => ({
  product: state.product,
  questions: state.questions,
});

var mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => {
    dispatch(handleProductSelect(productId));
  },
  fetchQuestions: (productId) => {
    dispatch(fetchQuestions(productId));
  },
});

var QAContainer = connect(mapStoreToProps, mapDispatchToProps)(QA);

export default QAContainer;
