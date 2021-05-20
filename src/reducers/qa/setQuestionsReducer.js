import Redux from "redux";

var setQuestionsReducer = (state = [], action) => {
  if (action.type === "SET_QUESTIONS") {
    return action.payload;
  } else {
    return state;
  }
};

export default setQuestionsReducer;
