import React from 'react'

import HollowButton from "../hollowButton/hollowbutton.component";

export default function BigItem(props) {
    return (
        <div 
        className="bigitem-wrapper"
        style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props.image})`}}>
        >
            <div className="bigitem-content">
                <div className="bigitem-content-title">
                    {props.title}
                </div>
                <HollowButton
                    message="shop now"
                    size="15rem"
                    fontSize="2rem"
                    color="#fff"
                    padding="1rem"
                    margin="1rem"
                    cb={props.cb}
                 />
            </div>
        </div>
    )
}
