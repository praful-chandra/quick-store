import React from 'react'

export default function HeroBanner(props) {
    return (
        <div className="herobanner-wrapper" >
            <img className="herobanner-image" src={props.image} alt=""/>
            <div className="herobanner-title">{props.title}</div>
        </div>
    )
}
