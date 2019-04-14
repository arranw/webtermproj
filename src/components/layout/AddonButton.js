import React from "react";
import classnames from "classnames";

export default function AddonButton(props) {
  const { name, label, cost, toggleOption, selectedOptions } = props;
  return (
    <button
      type="button"
      className={classnames("btn btn-secondary", {
        "btn-info": selectedOptions[name]
      })}
      onClick={() => toggleOption(name)}
    >
      {label} ({cost}$/day)
    </button>
  );
}
