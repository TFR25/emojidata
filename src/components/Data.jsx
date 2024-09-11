import React from "react";

function Data(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        <p>{props.meaning}</p>
      </dd>
    </div>
  );
}

export default Data;
