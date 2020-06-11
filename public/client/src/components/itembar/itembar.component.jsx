import React from 'react'

import ProductItem from "../productItem/productitem.component";

export default function ItemBar(props) {
    return (
        <div className="itembar-component">
                {
                    props.products.map(prod=><ProductItem product={prod} key={"itemBar"+prod._id}/>)
                }
        </div>
    )
}
