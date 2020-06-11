import React from "react";
import { connect } from "react-redux";
import CategoryPopularThumb from "../../../components/category/category-popular/category-popular-thumb.component";
import CategoryPopularThumbRight from "../../../components/category/category-popular/category-popular-thumb-right.component";
import CategoryPopularDetail from "../../../components/category/category-popular/category-popular-details.component";

import {
  CategoryThumbLoading,
  CategoryThumbDetailsLoading,
} from "../../../components/loading/loading.component";

function Categories(props) {
  return (
    <div className="categories-wrapper">
      {props.category.categoryLoading ? (
        <div className="categories-popular-wrapper">
          <CategoryThumbLoading />
          <CategoryThumbDetailsLoading />
        </div>
      ) : (
        props.category.categories.map((cate, index) =>
          index % 2 === 0 ? (
            <div className="categories-popular-wrapper" key={cate._id}>
              <CategoryPopularThumb image={cate.image} />
              <CategoryPopularDetail
                products={cate.Products}
                title={cate.name}
                id={cate._id}
              />
            </div>
          ) : (
            <div className="categories-popular-wrapper" key={cate._id}>
              {window.innerWidth < 610 ? (
                <>
                  <CategoryPopularThumb image={cate.image} />{" "}
                  <CategoryPopularDetail
                    products={cate.Products}
                    title={cate.name}
                    id={cate._id}
                  />
                </>
              ) : (
                <>
                  <CategoryPopularDetail
                    products={cate.Products}
                    title={cate.name}
                    id={cate._id}
                  />
                  <CategoryPopularThumbRight image={cate.image} />
                </>
              )}
            </div>
          )
        )
      )}

      {/*  */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps)(Categories);
