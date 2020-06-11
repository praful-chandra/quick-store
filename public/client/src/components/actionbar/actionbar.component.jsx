import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountUpAlt,
  faSortAmountDownAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ActionBar(props) {
  const [selectedItem, selectedItemHandler] = useState(0);
  const items = ["latest", "price", "discount"];

  const handleSort = (index) => {
    switch (index) {
      case 0: {
        selectedItemHandler(index);
        props.sort({ type: "sort", value: "createdAt" });
        break;
      }

      case 1: {
        selectedItemHandler(index);
        props.sort({ type: "sort", value: "price" });

        break;
      }
      case 2: {
        selectedItemHandler(index);
        props.sort({ type: "sort", value: "discount" });

        break;
      }

      default: {
        selectedItemHandler(0);
        props.sort({ type: "sort", value: "createdAt" });

        break;
      }
    }
  };

  return (
    <div className="actionbar-wrapper">
      <button
        className="actionbar-head pointer"
        onClick={() => {
          props.directionHandler(!props.direction);
        }}
      >
        <FontAwesomeIcon
          icon={props.direction ? faSortAmountUpAlt : faSortAmountDownAlt}
        />
        sort By
      </button>

      {items.map((itm, index) => (
        <button
          key={"actionBar"+index}
          className={`actionbar-sub ${
            selectedItem === index ? "actionbar-sub-selected" : ""
          }`}
          onClick={() => handleSort(index)}
        >
          {itm}
        </button>
      ))}
    </div>
  );
}
