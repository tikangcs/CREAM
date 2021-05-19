import Redux from "redux";

var setCurrentQuestionsReducer = (state = [], action) => {
  if (action.type === "SET_QUESTIONS") {
    return action.payload;
  } else {
    return state;
  }
};

export default setCurrentQuestionsReducer;
