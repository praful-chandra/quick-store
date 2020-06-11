import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/button.component";

import {getTotalPrice} from "../../redux/utils/cart.utl";

const textBox = ({ title, type, size, placeholder, value, cb }) => {
  return (
    <div className="checkout-left-form-input">
      <label> {title} </label>
      <input
        name={title}
        type={type}
        style={{ width: size ? size : "100%" }}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

class CheckoutScreen extends Component {
  constructor(params) {
    super(params);
    this.state = {};
  }

  render() {
    return (
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <img
            src={require("../../assets/Logo.png")}
            alt=""
            className="checkout-left-logo pointer"
            onClick={()=>{ this.props.history.push("/cart") }}
          />
          {/* <div className="checkout-left-pageindicator">
            <div className="checkout-left-pageindicator-item checkout-left-pageindicator-item-selected"></div>
            <div className="checkout-left-pageindicator-item"></div>
            <div className="checkout-left-pageindicator-item"></div>
          </div> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("form submit");
            }}
            className="checkout-left-form-wrapper"
          >
            <div className="checkout-left-form-header">Contact Information</div>
            {textBox({
              title: "Email",
              type: "email",
              placeholder: "user@mail.com",
            })}
            <div className="checkout-left-form-header">Shipping Details</div>
            <div className="checkout-left-form-horizontal">
              {textBox({
                title: "First Name",
                type: "text",
                placeholder: "first name",
              })}
              {textBox({
                title: "Last Name",
                type: "text",
                placeholder: "last name",
              })}
            </div>

            <div className="checkout-left-form-input">
              <label> Address </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Address"
              ></textarea>
            </div>

            <div className="checkout-left-form-horizontal">
              {textBox({
                title: "City",
                type: "text",
                size: "95%",
                placeholder: "city",
              })}
              {textBox({
                title: "State",
                type: "text",
                size: "95%",
                placeholder: "state",
              })}
              {textBox({
                title: "pin code",
                type: "number",
                size: "95%",
                placeholder: "PIN code",
              })}
            </div>
            {textBox({
              title: "Phone Number",
              type: "tel",
              placeholder: "Phone Number",
            })}

            <Button message="Pay Now" />
          </form>
        </div>
        <div className="checkout-right">
          <div className="checkout-right-cart-wrapper">
            {this.props.cart.items.map((itm) => (
              <div className="checkout-right-cart-item">
                <div className="checkout-right-cart-item-image">
                  <img
                    src={itm.image}
                    alt=""
                    srcset=""
                  />
                  <div className="checkout-right-cart-item-image-counter">
                    {itm.quantity}
                  </div>
                </div>
                <div className="checkout-right-cart-item-name">{itm.name}</div>
                <div className="checkout-right-cart-item-Price">{(itm.price - (itm.discount / 100) * itm.price)}</div>
              </div>
            ))}
          </div>

          <div className="checkout-right-cart-total">
            {" "}
            <span>Total :</span>
            <span> Rs. {getTotalPrice(this.props.cart.items)}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CheckoutScreen);
