import React from "react";

 function Button(props) {
  
  return (
    <button
      className="button-wrapper"
      style={{
        width: props.size || "20rem",
        color: props.color || "",
        backgroundColor: props.backgroundColor || "",
        border : "5px solid "+ props.color ||""
      }}
      onClick={props.cb}
    >
      {props.message}
    </button>
  );
}


export default Button;