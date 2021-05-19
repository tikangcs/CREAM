import { connect, dispatch } from "react-redux";
import Search from "../../components/qa/Search";
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

var QASearch = connect(mapStoreToProps, mapDispatchToProps)(Search);

export default QASearch;
