import React, { useState, useEffect } from "react";
import QEntries from "./QEntries";

const List = ({ product, questions }) => {
  const [displayedQuestions, setDisplayedQuestions] = useState(
    questions.slice(0, 2)
  );
  const [displayedQIndex, setDisplayedQIndex] = useState(0);
  const [isQFullyLoaded, setIsQFullyLoaded] = useState(false);
  const [currentSort, setCurrentSort] = useState("helpful");
  const renderQuestions = (index) => {
    setDisplayedQuestions(questions.slice(0, index));
    setDisplayedQIndex(index);
  };

  const loadQClickHandler = (e) => {
    if (displayedQIndex === questions.length) {
      renderQuestions(questions.length);
    } else if (displayedQIndex >= questions.length - 2) {
      renderQuestions(questions.length);
      setIsQFullyLoaded(true);
    } else {
      renderQuestions(displayedQIndex + 2);
    }
  };

  const hideQClickHandler = (e) => {
    if (displayedQIndex > 2) {
      renderQuestions(displayedQIndex - 2);
    }
  };

  const collapseQClickHandler = (e) => {
    renderQuestions(2);
    setIsQFullyLoaded(false);
  };

  const sortClickHandler = (e) => {
    setCurrentSort(e.target.value);
  };

  useEffect(() => {
    questions.length < 2
      ? renderQuestions(questions.length)
      : renderQuestions(2);
  }, [currentSort]);

  if (!questions.length) return <></>;
  return (
    <>
      <div className="QAlist">
        <div className="QAlist_displayCount">
          Questions 1-{displayedQIndex} of {questions.length}
        </div>
        <div className="QAlist_sortContainer">
          <div>
            <b>{`Sort: `}</b>
          </div>
          <select className="QAlist_sortButton">
            <option
              className="QAlist_sortLinks"
              value="helpful"
              onClick={sortClickHandler}
            >
              Most Helpful
            </option>
            <option
              className="QAlist_sortLinks"
              value="recent"
              onClick={sortClickHandler}
            >
              Most Recent
            </option>
          </select>
        </div>
      </div>

      <div className="QAlist_container">
        {displayedQuestions.map((question, i) => {
          return (
            <QEntries
              index={i}
              body={question.question_body}
              asker={question.asker_name}
              date={question.question_date}
              answers={Object.values(question.answers)}
              key={question.question_id}
              product={product}
            />
          );
        })}
      </div>
      <div>
        {isQFullyLoaded ? (
          <div className="QAlist_loadMoreQuestions">
            <button
              className="QAlist_loadMoreQuestionsButton"
              type="button"
              onClick={collapseQClickHandler}
            >
              Collapse Questions
            </button>
          </div>
        ) : questions.length > 4 ? (
          <div className="QAlist_loadMoreQuestions">
            <button
              className="QAlist_loadMoreQuestionsButton"
              type="button"
              onClick={loadQClickHandler}
            >
              Show more questions
            </button>
            <button
              className="QAlist_loadMoreQuestionsButton"
              type="button"
              onClick={hideQClickHandler}
            >
              Show less questions
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default List;
