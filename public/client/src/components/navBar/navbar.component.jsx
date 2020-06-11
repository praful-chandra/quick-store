import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faArrowLeft,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

import { changeTab } from "../../redux/action/subNav.action";
import HeadingText from "../headingText/headingtext.component";
import Button from "../button/button.component";

import {removeFromCart} from "../../redux/action/cart.action";

function NavBar(props) {
  const [scroll, scrollHandler] = useState(window.scrollY);
  const [displaySearchBar, displaySearchBarHandler] = useState(false);
  const [search , setSearch] = useState("");
  const [showCart,setShowCart] = useState(false);
  //   useEffect(() => {
  //     if (window.innerWidth < 610) displaySearchBarHandler(false);
  //   }, []);

  window.onscroll = (e) => {
    scrollHandler(window.scrollY);
    
  };

  const handleSubmit = (e) => {    
    e.preventDefault();
    if (window.innerWidth < 610 && !displaySearchBar)
    displaySearchBarHandler(true);
    else
      props.history.push("/search"+search)
      
  };

  const handlesearchBack = ()=>{
    displaySearchBarHandler(false);

  }
  return (
    <div
      className="navbar-wrapper"
      style={{
        boxShadow: scroll > 50 ? "0px 10px 30px #aaa" : "",
      }}
    >
      <img
        src={require("../../assets/Logo.png")}
        alt="quick store"
        className="navbar-logo pointer"
        onClick={() => {
          props.changeTab(1);
          props.history.push("/");
        }}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={e=>setSearch(e.target.value)}
          className="navbar-searchbar"
          placeholder="Search for : items"
        />
        {displaySearchBar ? (
         <> 
         <input
            type="search"
            name="search"
            id="search"
            value={search}
          onChange={e=>setSearch(e.target.value)}
            className="navbar-searchbar-mobile"
            placeholder="Search for : items"
          />
            <button  className="navbar-searchbar-back pointer" onClick={handlesearchBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
         </>
        ) : null}

      

        <button  className={`navbar-searchbar-btn ${displaySearchBar ? "navbar-searchbar-btn-mobile" : ""}  pointer`} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="navbar-user">
        <button className={`navbar-user-cart ${showCart ? "navbar-user-cart-active" : ""}`} onClick={()=>setShowCart(s=>!s)} > 
        <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
          <span className="navbar-user-cart-count">{props.cart.items.length}</span>

          
        </button>
        {
            showCart ? <div className="navbar-user-cart-details">
            <HeadingText text="Cart" size="3rem" color="#FF0053" />
            <div className="navbar-user-cart-details-itemwrapper">
              {
                props.cart.items.map(itm=><div key={"cartItm"+itm._id} className="navbar-user-cart-details-item">
                  <img  className="navbar-user-cart-details-item-image" src={itm.image} alt="product"/>

                <div className="navbar-user-cart-details-item-title">{itm.name}</div>
                <div className="navbar-user-cart-details-item-qty">{itm.quantity}</div>
                <div className="navbar-user-cart-details-item-delete" onClick={()=>props.removeFromCart(itm._id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>)
              }
              
            </div>
            <Button message="Checkout" cb={()=>{ setShowCart(false);props.history.push("/cart"); }}/>
          </div> : null
          }

        {/* <div className="navbar-user-name">
          <span className="navbar-user-name-bold"> HELLO </span>
          user name
        </div> */}
      </div>
    </div>
  );
}

const mapStateToProps = state =>({
  cart : state.cart
})

export default connect(mapStateToProps, { changeTab,removeFromCart })(withRouter(NavBar));
