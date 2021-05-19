import { connect, dispatch } from "react-redux";
import List from "../../components/qa/List";
import handleProductSelect from "../../actions/handleProductSelect";
import fetchQuestions from "../../actions/qa/fetchQuestions";

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

var QAList = connect(mapStoreToProps, mapDispatchToProps)(List);

export default QAList;
