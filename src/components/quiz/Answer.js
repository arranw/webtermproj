import React from "react";
import classnames from "classnames";

export default function Answer(props) {
  const { text, letter, num, chooseAnswer, chosenAnswers } = props;

  return (
    <li
      className={classnames("list-group-item", {
        "bg-light text-primary": chosenAnswers[num - 1] === letter // bg-info doesn't activate
      })}
      onClick={() => {
        chooseAnswer(num, letter);
      }}
    >
      <div className="row">
        <div className="col-md-11">
          {letter}. {text}
        </div>
        <div className="col-md-1">
          <i
            className={classnames({
              "fas fa-circle float-right mt-1 text-primary":
                chosenAnswers[num - 1] === letter
            })}
          />
        </div>
      </div>
    </li>
  );
}
