import React from 'react'

export default function CategoryPopularThumb(props) {
    return (
        <div className="categorypopularthumb-wrapper" >
            
            <div className="categorypopularthumb-image">
                <img src={props.image} alt="" />
            </div>
            <div className="categorypopularthumb-imageborder">
            <div className="categorypopularthumb-imageborder-shadow"></div>

            </div>
        </div>
    )
}
