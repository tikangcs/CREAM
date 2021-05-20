import React, { useState, useEffect } from "react";
// import AnswerEntries from "./QA-AnswerEntries.jsx";
// import AModal from "./QA-AnswerModal.jsx";
// import ReactModal from "react-modal";

let QEntries = function ({
  body,
  asker,
  date,
  helpfulCount,
  reported,
  answers,
  qCount,
}) {
  return (
    <>
      <div className="QAqentries">
        <div className="QAqentries_metaContainer">
          <span className="QAqentries_question">Q:</span>
          <span className="QAqentries_meta">From: {asker}</span>
          <span className="QAqentries_meta">
            {new Date(date).toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="QAqentries_questionBody">
          <b>Question:</b>
          <span
            className="QAqentries_questionCollpase"
            onClick={() => console.log("replace with click handler")}
          >
            <img src="https://img.icons8.com/ultraviolet/20/000000/expand-arrow--v1.png" />
          </span>
          <div>{body}</div>
          <div className="QAqentries_answers">
            <button
              className="QAqentries_addButton"
              type="button"
              onClick={() => console.log("replace with click handler")}
            >
              Add an answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QEntries;
