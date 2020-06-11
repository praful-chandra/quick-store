import React from 'react'

export default function HeadingText(props) {

  const  style={
        color : props.color || "#000",
        fontSize : props.size || "5rem",
        fontFamily: "'Permanent Marker', cursive",
    }

    return (
        <div style={style}>
            {props.text}
        </div>
    )
}
