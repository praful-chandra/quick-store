import React from 'react'

import bannerPlaceholder from "../../../assets/banner-placeholder.jpg";

export default function MainBanner() {
    return (
        <div className="mainbanner-wrapper">
                <div className="mainbanner-body" style={{backgroundImage : `url(${bannerPlaceholder})`}}>
                        Next day delivery avaliable
                </div>
        </div>
    )
}
