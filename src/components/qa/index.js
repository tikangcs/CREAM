import React from "react";
import QASearch from "../../containers/qa/QASearch";
import QAList from "../../containers/qa/QAList";

const QA = ({ questions }) => {
  console.log("QAContainer", questions);
  return (
    <div className="QAcontainer">
      <h1 className="QAcontainer_header">Customer Questions</h1>
      <h3 className="QAcontainer_subheader">{`Ask for information about PRODUCT NAME from the customers who love it.`}</h3>
      <div className="ask-button-div">
        <input
          className="QAlist_askButton"
          type="button"
          value="Ask a question"
          onClick={() =>
            console.log("replace with ask a questions click handler function")
          }
        ></input>
      </div>
      <QASearch />
      <QAList />
      {questions.results ? (
        <ul className="product-features-list">
          {questions.results.map((question, i) => {
            return (
              <li key={`${i}-question`}>
                <i className="fas fa-check"></i>
                {question.question_id}
              </li>
            );
          })}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default QA;
