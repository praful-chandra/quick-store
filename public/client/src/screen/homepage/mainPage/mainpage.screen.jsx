import React from 'react'


import MainBanner from "../../../components/banner/mainBanner/mainBanner.component";
import HomePageContent from "../homepage-content/homepage-content.component";


export default function MainPageScreen() {
    return (
        <div className="mainpage-wrapper">
            <MainBanner />
            <HomePageContent />
        </div>
    )
}
