import React from "react";
import { connect } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import HeadingText from "../../components/headingText/headingtext.component";
import Button from "../../components/button/button.component";

import CartItem from "./cartItem";

import { getTotalPrice } from "../../redux/utils/cart.utl";

function CartScreen(props) {
  return (
    <div className="cart-wrapper">
      <HeadingText text="Cart" size="3rem" color="#FF0053" />
      <div className="cart-checkout-wrapper">
        <div className="cart-checkout-header">
          <div className="cart-checkout-header-img">Product</div>
          <div className="cart-checkout-header-name">Title</div>
          <div className="cart-checkout-header-price">Price X Qty</div>
          <div className="cart-checkout-header-totalPrice">Total Price</div>
          <div className="cart-checkout-header-remove">Remove</div>
        </div>
        {props.cart.items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}

        <div className="cart-checkout-total">
          Total : Rs. {getTotalPrice(props.cart.items)}
        </div>
      <span className="cart-checkout-btn">
        <Button message="Buy Now" cb={() => {props.history.push("/checkout")}} />
      </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartScreen);
