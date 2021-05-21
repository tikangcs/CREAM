import React, { useState } from "react";
import QASearch from "../../containers/qa/QASearch";
import QAList from "../../containers/qa/QAList";
import QModal from "./QModal";
import ReactModal from "react-modal";

const QA = ({ product, questions }) => {
  const [showQModal, setShowQModal] = useState(false);

  const qModalClickHandler = (e) => {
    setShowQModal(!showQModal);
  };

  return (
    <div className="QAcontainer">
      <div className="QAcontainer_title">
        <h1 className="QAcontainer_header">Customer Questions and Answers</h1>
        <h3 className="QAcontainer_subheader">{`Ask for information from the customers who love it`}</h3>
      </div>

      <div className="ask-button-div">
        <input
          className="QAlist_askButton"
          type="button"
          value="Ask a new question"
          onClick={qModalClickHandler}
        ></input>
        <div>- OR -</div>
        <div className="QAlist_searchbar">
          <div className="QAsearch_subtext">
            <b>Find questions and answers by keywords</b>
          </div>
          <QASearch />
        </div>
      </div>
      {showQModal ? (
        <ReactModal
          isOpen={showQModal}
          ariaHideApp={false}
          onRequestClose={qModalClickHandler}
        >
          <QModal
            showQModal={showQModal}
            setShowQModal={setShowQModal}
            productName={product.name}
          />
        </ReactModal>
      ) : null}
      {questions.length ? (
        <QAList />
      ) : (
        <div className="QAlist">
          No Questions to Display. Ask the first question
        </div>
      )}
    </div>
  );
};

export default QA;
