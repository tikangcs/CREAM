import React from "react";
import QEntries from "./QEntries";

const List = ({ questions }) => {
  console.log("QAList", questions.results);
  return (
    <>
      <div className="QAlist">
        <div className="QAlist_displayCount">Questions 1-3 of 3</div>
        <select className="QAlist_sortButton">
          <option
            className="QAlist_sortLinks"
            value="helpful"
            onClick={() => console.log("replace with sortclickhandler")}
          >
            Most Helpful
          </option>
          <option
            className="QAlist_sortLinks"
            value="recent"
            onClick={() => console.log("replace with sortclickhandler")}
          >
            Most Recent
          </option>
          <option
            className="QAlist_sortLinks"
            value="userA"
            onClick={() => console.log("replace with sortclickhandler")}
          >
            Username: Ascending
          </option>
        </select>
      </div>

      <div className="QAlist_container">
        {questions.results ? (
          questions.results.map((question) => {
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
          })
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className="QAlist_loadMoreQuestions">
          <button
            className="QAlist_loadMoreQuestionsButton"
            type="button"
            onClick={() => console.log("implement collpaseqclickhandler")}
          >
            Collapse Questions
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
