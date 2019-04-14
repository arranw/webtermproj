import React from "react";

export default function InputGroup(props) {
  const { name, value, action, disabled } = props;
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{name}</span>
      </div>
      <input
        type="text"
        name={name}
        className="form-control"
        value={value}
        onChange={e => action(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
