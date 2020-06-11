import React, { useState,useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios"
import Button from "../../../components/button/button.component";

import {addToCart} from "../../../redux/action/cart.action";

function ProductDetail(props) {
  const [size, sizeHandler] = useState(0);
  const [prod,setProd] = useState(null);
  const id = props.match.params.id;
  useEffect(()=>{
    (
      async function(){
        const product = await axios.post("/api/get/products",{only:{_id :id}});
        setProd(product.data.products[0]);
      }
    )()
  },[])

 

  return prod !== null ?  (
    <div className="productdetail-wrapper">
      <div className="productdetail-image">
        <img
          src={prod.image}
          alt="product"
        />
      </div>
      <div className="productdetail-info">
        <div className="productdetail-info-title">{prod.name}</div>
        <div className="productdetail-info-description">
         {prod.description}
        </div>
        <div className="productdetail-info-size">
          {prod.avaliableSizes.map((s, i) => (
            <div
            key={prod._id + i}
              className={`productdetail-info-size-item ${
                size === i ? "productdetail-info-size-item-selected" : ""
              }`}
              onClick={() => sizeHandler(i)}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="productdetail-info-btn">
          <Button message="Add to cart" cb={()=>props.addToCart(prod)} />
        </div>
      </div>
    </div>
  ) : <div></div>
}


export default connect(null,{addToCart})(ProductDetail)