import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar.component";

import HomepageScreen from "./screen/homepage/homepage.screen";
import ProductsScreen from "./screen/product/products/products.screen";
import ProductDetailScreen from "./screen/product/productDetail/productDetail.screen";
import SearchScreen from "./screen/search/search.screen";
import SaleScreen from "./screen/sales/sales.screen";
import CampaignScreen from "./screen/campaign/campaignDetail.screen";
import CartScreen from "./screen/cart/cart.screen";
import CheckoutScreen from "./screen/checkout/checkout.screen";
import Footer from "./components/footer/footer.component";

export default function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={(r) => {
          if (r.location.pathname !== "/checkout") return <NavBar />;
        }}
      />
      <div className="App-body">
        <Route exact path="/" component={HomepageScreen} />
        <Route exact path="/search:search" component={SearchScreen} />
        <Route exact path="/category/:id" component={ProductsScreen} />
        <Route exact path="/product/:id" component={ProductDetailScreen} />
        <Route exact path="/sale/:id" component={SaleScreen} />
        <Route exact path="/campaign/:id" component={CampaignScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/checkout" component={CheckoutScreen} />
      </div>
      <Route
        path="/"
        render={(r) => {
          if (r.location.pathname !== "/checkout") return <Footer />;
          // if (r.location.pathname !== "/cart") return <Footer />;
        }}
      />
    </div>
  );
}
