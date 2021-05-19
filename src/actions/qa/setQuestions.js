var setQuestions = (questions) => {
  return {
    type: "SET_QUESTIONS",
    payload: questions,
  };
};

export default setQuestions;
