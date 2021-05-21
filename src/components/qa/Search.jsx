import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

const Search = ({ questions }) => {
  let answers = questions.map((question) => Object.values(question.answers));
  const [query, setQuery] = useState("");

  const options = {
    includesMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    keys: ["question_body"],
  };
  const fuse = new Fuse(questions, options);
  const results = fuse.search(query);
  console.log("QASearch", results);
  const sayHello = () => {};
  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    sayHello(), [query];
  });
  return (
    <>
      <div className="QAsearch">
        <label>
          <input
            type="search"
            className="QAsearch_bar"
            value={query}
            onChange={searchChangeHandler}
            placeholder="Have a question? Search for your answers..."
            size="70"
          ></input>
        </label>
      </div>
      {results ? (
        <>
          {results.map((result) => {
            return (
              <>
                <div className="QAsearchResults">
                  <div className="QAsearchResultItem">
                    <b>Match Found:</b> {result.item.question_body}
                  </div>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Search;
