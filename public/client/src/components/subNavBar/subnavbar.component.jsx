import React from "react";
import {connect} from "react-redux";

import {changeTab} from "../../redux/action/subNav.action";

 function SubNavbar(props) {
  return (
    <div className="subnavbar-wrapper">
      <ul>
        <li
          className={`${props.subNav.tab === 0 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            props.changeTab(0);
          }}
        >
          What's New
        </li>
        <li
          className={`${props.subNav.tab === 1 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            props.changeTab(1);
          }}
        >
          Home
        </li>
        <li
          className={`${props.subNav.tab === 2 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            props.changeTab(2);
          }}
        >
          Category
        </li>
        <li
          className={`${props.subNav.tab === 3 ? "subnavbar-selected" : ""} pointer`}
          onClick={() => {
            props.changeTab(3);
          }}
        >
          Campaigns
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state =>({
  subNav : state.subNav
})

export default connect(mapStateToProps,{changeTab})(SubNavbar);