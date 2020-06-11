import React from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash,faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons";

import {removeFromCart,incrementCart,decrementCart} from "../../redux/action/cart.action";

function CartItem(props) {

    const discountedPrice = (props.item.price - (props.item.discount / 100) * props.item.price);

    return (
        <div className="checkoutItem">
        <div style={{backgroundImage:`url(${props.item.image})`}} className="checkoutItem-img" > </div>
        <div className="checkoutItem-name">{props.item.name}</div>
        <div className="checkoutItem-price">
        Rs. {props.item.price}
      <div> X </div>
       <span>
        <FontAwesomeIcon icon={faCaretUp}  style={{cursor:"pointer"}} onClick={()=>props.incrementCart(props.item._id)}/>

         <span>{props.item.quantity}</span>
           <FontAwesomeIcon icon={faCaretDown} style={{cursor:"pointer"}} onClick={()=>props.decrementCart(props.item._id)}/>
       </span>
        </div>
        <div className="checkoutItem-totalPrice">
           Rs. { discountedPrice * props.item.quantity }
        </div>
    
        <div className="checkoutItem-remove" >
        <FontAwesomeIcon icon={faTrash}  onClick={()=>props.removeFromCart(props.item._id)}/>
         </div>
    </div>
    )
}



export default connect(null,{removeFromCart,incrementCart,decrementCart})(CartItem)
