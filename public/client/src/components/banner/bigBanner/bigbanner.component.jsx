import React from 'react'

export default function BigBanner(props) {
    return (
        <div 
        className="bigbanner-wrapper"
        style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props.image})`}}>
         >
            <div className="bigbanner-content">
            {props.title}
            </div>
        </div>
    )
}
