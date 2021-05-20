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
      <h1 className="QAcontainer_header">Customer Questions and Answers</h1>
      <h3 className="QAcontainer_subheader">{`Ask for information about ${product.name} from the customers who love it.`}</h3>
      <div className="ask-button-div">
        <input
          className="QAlist_askButton"
          type="button"
          value="Ask a question"
          onClick={qModalClickHandler}
        ></input>
      </div>
      {showQModal ? (
        <ReactModal isOpen={showQModal} onRequestClose={qModalClickHandler}>
          <QModal
            showQModal={showQModal}
            setShowQModal={setShowQModal}
            ariaHideApp={false}
            productName={product.name}
          />
        </ReactModal>
      ) : null}
      <QASearch />
      {questions.length ? (
        <QAList />
      ) : (
        <div className="QAlist">
          No Questions to Display. Ask the first question!
        </div>
      )}
    </div>
  );
};

export default QA;
