import React from "react";

// STATE: questions, query, answers, results from fuse search package

const Search = ({ questions }) => {
  // console.log("QASearch", questions);
  return (
    <>
      <div className="QAsearch">
        <label>
          <input
            type="search"
            className="QAsearch_bar"
            value={"update with an onchange query state"}
            onChange={() => console.log("searchchangehandler")}
            placeholder="Have a question? Search for answers"
            size="70"
          ></input>
        </label>
      </div>
    </>
  );
};

export default Search;
