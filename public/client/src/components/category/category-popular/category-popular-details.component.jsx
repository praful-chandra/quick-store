import React from "react";
import {withRouter} from "react-router-dom";
import Button from "../../button/button.component";

function CategoryPopularDetails(props) {

  const products = props.products;

  const buttonAction = ()=>{
    props.history.push("/category/"+props.id)
  }

  return (
    <div className="categorypopulardetail-wrapper">
      <div className="categorypopulardetail-title">{props.title}</div>
      <div className="categorypopulardetail-productsgrid">

      {
        products.map(p=><img
          key={p._id}
          src={p.image}
          alt={p.name}
        />)
      }

      </div>
      <Button message="See More" cb={buttonAction} />
    </div>
  );
}


export default withRouter(CategoryPopularDetails);