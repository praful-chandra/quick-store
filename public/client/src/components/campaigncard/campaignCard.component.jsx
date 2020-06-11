import React from "react";

export default function CampaignCard(props) {
  return <div className="campaigncard-wrapper">
      <img className="campaigncard-image" src={props.image} alt="campaign cover"/>
      <div className="campaigncard-name">
         {props.title}
      </div>
  </div>;
}
