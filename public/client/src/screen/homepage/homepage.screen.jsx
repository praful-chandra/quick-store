import React, { Component } from "react";
import { connect } from "react-redux";

import SubNavBar from "../../components/subNavBar/subnavbar.component";

import MainPage from "./mainPage/mainpage.screen";
import WhatsNewScreen from "./whatsnew/whatsnew.screen";
import CategoriesScreen from "./categories/categories.screen";
import CampaignScreen from "./campaign/campaign.screen";

import {getCategoryAsync} from "../../redux/action/category.action";

class HomePage extends Component {
  renderTab = () => {
    switch (this.props.subNav.tab) {
      case 0:
        return <WhatsNewScreen />;

      case 1:
        return <MainPage />;

      case 2:
        return <CategoriesScreen />;
        
      case 3:
        return <CampaignScreen />;
      default:
        return <MainPage />;
    }
  };

componentDidMount(){
if(!this.props.category){
  this.props.getCategoryAsync({sort:{createdAt : -1}});
}
}

  render() {
    return (
      <div className="homepage-wrapper">
        <SubNavBar />
        {this.renderTab()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subNav: state.subNav,
  product : state.products.init,
  category : state.category.init
});

export default connect(mapStateToProps,{getCategoryAsync})(HomePage);
