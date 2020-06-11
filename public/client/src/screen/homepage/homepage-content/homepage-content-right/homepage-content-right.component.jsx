import React from "react";
import { connect } from "react-redux";
// import HeadingText from "../../../../components/headingText/headingtext.component";
import ActionBar from "../../../../components/actionbar/actionbar.component";
import ProductItem from "../../../../components/productItem/productitem.component";
import HollowButton from "../../../../components/hollowButton/hollowbutton.component";

import { ProductLoading } from "../../../../components/loading/loading.component";

function Homepage_content_right(props) {
  return (
    <div className="homepage_content-right-wrapper">
      {/* <HeadingText text="New" size="6rem" />  */}
      <ActionBar {...props} />

      <div className="products-itemgrid">
        {props.products.productLoading ? (
          <ProductLoading length={5} />
        ) : (
          props.products.products.map((prod) => (
            <ProductItem key={prod._id} product={prod} add={true}/>
          ))
        )}
      </div>
      {props.products.totalCount > props.products.products.length ? (
        <HollowButton message="Load More" cb={props.loadMore} />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Homepage_content_right);
