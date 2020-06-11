import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function HomepageComponentLeft(props) {
  const [selectedItem, selectedItemHandler] = useState(0);

  const items = [ "women", "Men", "Boys", "Girls"];

  const only = props.only;

  useEffect(()=>{
       switch(selectedItem){

        case 0 : only({});break;
        case 1 : only({for :"Women"});break;
        case 2 : only({for :"Men"});break;
        case 3 : only({for :"Boys"});break;
        case 4 : only({for :"Girls"});break;

        default : only({});break;
       }
  },[selectedItem,only])

  return (
    <div className="homepage_content-left-wrapper">
      <ul>
        <li
          className={selectedItem === 0 ? "homepage_content-left-selected" : ""}
          onClick={() => selectedItemHandler(0)}
        >
          New <FontAwesomeIcon icon={faBolt} />
        </li>
        {items.map((i, index) => (
          <li
            key={"hpageLeft" + index}
            className={
              selectedItem === index + 1 ? "homepage_content-left-selected" : ""
            }
            onClick={() => selectedItemHandler(index + 1)}
          >
            {" "}
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
