import React, { useState, useEffect } from "react";
import QEntries from "./QEntries";

const List = ({ questions }) => {
  const [displayedQuestions, setDisplayedQuestions] = useState(
    questions.slice(0, 4)
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
    if (displayedQIndex > 4) {
      renderQuestions(displayedQIndex - 2);
    }
  };

  const collapseQClickHandler = (e) => {
    renderQuestions(4);
    setIsQFullyLoaded(false);
  };

  const sortClickHandler = (e) => {
    setCurrentSort(e.target.value);
  };

  useEffect(() => {
    questions.length < 4
      ? renderQuestions(questions.length)
      : renderQuestions(4);
  }, []);

  if (!questions.length) return <></>;
  return (
    <>
      <div className="QAlist">
        <div className="QAlist_displayCount">
          Questions 1-{displayedQIndex} of {questions.length}
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

      <div className="QAlist_container">
        {displayedQuestions.map((question) => {
          return (
            <QEntries
              body={question.question_body}
              asker={question.asker_name}
              date={question.question_date}
              helpfulCount={question.question_helpfulness}
              reported={question.reported}
              answers={Object.values(question.answers)}
              qCount={questions.length}
              key={question.question_id}
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
        ) : (
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
        )}
      </div>
    </>
  );
};

export default List;
