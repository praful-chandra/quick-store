import React from "react";

export function ProductLoading(props) {
  const data = [];

  for (let i = 1; i <= props.length; i++) {
    data.push(
      <div className="loading-product-wrapper" key={"loading" + i}>
        <div className="loading-product-image"></div>
        <div className="loading-product-textbox"></div>
        <div className="loading-product-textbox"></div>
      </div>
    );
  }

  return data;
}

export function CategoryThumbLoading(props) {
  return (
    <div className="categorypopularthumb-wrapper">
      <div className="categorypopularthumb-image loading-categorythumb"></div>
      <div className="categorypopularthumb-imageborder">
        <div className="categorypopularthumb-imageborder-shadow loading-categorythumb-shadow"></div>
      </div>
    </div>
  );
}


export function CategoryThumbDetailsLoading(props){
  return(
    <div className="categorypopulardetail-wrapper">
    <div className="categorypopulardetail-title loading-categorydetail-title"></div>
    <div className="categorypopulardetail-productsgrid">
      <div className="loading-categorydetail-image"></div>
      <div className="loading-categorydetail-image"></div>
      <div className="loading-categorydetail-image"></div>
      <div className="loading-categorydetail-image"></div>
    </div>
    
  </div>
  )
}



export function SmallBannerLoading(){
  return(
    <div className="smallbanner-wrapper loading-smallbanner" >
            <div className="smallbanner-content">
                <div className="smallbanner-content-title">
                    Loading
                </div>
           

            </div>
        </div>
  )
}


export function CampaignCardLoading(){
  return (
    <div className="campaigncard-wrapper loading-campaigncard">

  </div>
  )
}