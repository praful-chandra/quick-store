import React from 'react'

export default function CategoryPopularThumbRight(props) {
    return (
        <div className="categorypopularthumb-wrapper" >
            
            <div className="categorypopularthumb-image categorypopularthumb-right-image">
                <img src={props.image} alt="" />
            </div>
            <div className="categorypopularthumb-imageborder categorypopularthumb-right-imageborder">
            <div className="categorypopularthumb-imageborder-shadow categorypopularthumb-right-imageborder-shadow"></div>

            </div>
        </div>
    )
}
