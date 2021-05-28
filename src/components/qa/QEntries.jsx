import React, { useState, useEffect } from "react";
import AnswerEntries from "./AEntries.jsx";
import AModal from "./AModal.jsx";
import ReactModal from "react-modal";

let QEntries = function ({ body, asker, date, answers, product }) {
  const [arrayOfAnswers, setArrayOfAnswers] = useState(answers);
  const [displayedAnswers, setDisplayedAnswers] = useState(answers.slice(0, 2));
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showAModal, setShowAModal] = useState(false);
  const [markedQHelpful, setMarkedQHelpful] = useState(false);
  const [markedQReported, setMarkedQReported] = useState(false);

  const renderAnswers = (index) => {
    setDisplayedAnswers(arrayOfAnswers.slice(0, index));
    setDisplayedIndex(index);
  };
  const hideAnswersClickHandler = (e) => {
    setIsHidden(!isHidden);
  };

  const aModalClickHandler = (e) => {
    setShowAModal(!showAModal);
  };

  const loadClickHandler = (e) => {
    if (displayedIndex === arrayOfAnswers.length) {
      renderAnswers(arrayOfAnswers.length);
    } else if (displayedIndex >= arrayOfAnswers.length - 2) {
      renderAnswers(arrayOfAnswers.length);
      setIsFullyLoaded(true);
    } else {
      renderAnswers(displayedIndex + 2);
    }
  };

  const hideClickHandler = (e) => {
    if (displayedIndex > 2) {
      renderAnswers(displayedIndex - 2);
    }
  };

  const collapseClickHandler = (e) => {
    renderAnswers(1);
    setIsFullyLoaded(false);
  };

  const toggleQHelpfulClickHandler = (e) => {
    setMarkedQHelpful(!markedQHelpful);
  };

  const toggleQReportedClickHandler = (e) => {
    setMarkedQReported(!markedQReported);
  };
  useEffect(() => {
    renderAnswers(1);
  }, []);
  return (
    <>
      <div className="QAqentries">
        <div className="QAqentries_questionBodyContainer">
          <div className="QAqentries_questionLabel">Question:</div>
          <div className="QAqentries_questionContainer">
            <div className="QAqentries_questionBody">{body}</div>
            <div className="QAqentries_questionSubtext">
              By {asker} on{" "}
              {new Date(date).toLocaleString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="QAqentries_metaContainer">
              <a
                className="QAqentries_meta"
                href="#"
                onClick={aModalClickHandler}
              >
                Add an answer
              </a>
              <a
                className="QAqentries_meta"
                href="void(0)"
                onClick={toggleQHelpfulClickHandler}
              >
                {markedQHelpful ? "Helpful!" : "Mark as Helpful"}
              </a>
              <a
                className="QAqentries_meta"
                href="void(0)"
                onClick={toggleQReportedClickHandler}
              >
                {markedQReported ? "Reported!" : "Report"}
              </a>
              <span
                className="QAqentries_questionCollpase"
                onClick={hideAnswersClickHandler}
              >
                <img
                  src="https://img.icons8.com/ultraviolet/20/000000/expand-arrow--v1.png"
                  style={{ height: "100%", width: "100%" }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="QAqentries_answers"></div>
        {isHidden ? null : (
          <div className="QAqentries_displayedAnswers">
            {displayedAnswers.map((answer, i) => {
              return (
                <AnswerEntries
                  responder={answer.answerer_name}
                  body={answer.body}
                  date={answer.date}
                  images={answer.photos}
                  key={answer.id}
                />
              );
            })}
            <div className="QAqentries_loadButtonsContainer">
              {isFullyLoaded ? (
                <div className="QAqentries_collapse">
                  <span className="QAqentries_displayCount"></span>
                  <button
                    className="QAqentries_collapseButton"
                    type="button"
                    onClick={collapseClickHandler}
                  >
                    Collapse answers
                  </button>
                </div>
              ) : arrayOfAnswers.length > 2 ? (
                <div className="QAqentries_loadMore">
                  <div className="QAqentries_displayButtons">
                    <button
                      className="QAqentries_loadButton"
                      type="button"
                      value={displayedIndex}
                      onClick={loadClickHandler}
                    >
                      See more answers
                    </button>
                  </div>
                </div>
              ) : (
                <div className="QAqentries_loadMore">
                  <div className="QAqentries_displayCount"></div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showAModal ? (
        <ReactModal
          isOpen={showAModal}
          ariaHideApp={false}
          onRequestClose={aModalClickHandler}
        >
          <AModal
            arrayOfAnswers={arrayOfAnswers}
            setArrayOfAnswers={setArrayOfAnswers}
            setShowAModal={setShowAModal}
            productName={product.name}
            displayedAnswers={displayedAnswers}
            body={body}
          />
        </ReactModal>
      ) : null}
      <></>
    </>
  );
};

export default QEntries;
