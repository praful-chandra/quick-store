import React from "react";

export default function HollowButton(props) {
  return (
    <button
      className="hollowbutton-wrapper"
      style={{
        width: props.size || "29rem",
        fontSize: props.fontSize || "",
        color: props.color || "",
        padding : props.padding || "",
        margin : props.margin || ""
      }}
      onClick={props.cb}
    >
      {props.message}
    </button>
  );
}
