import React, { useState,useEffect } from "react";
import axios from "axios";

import HeadingText from "../../components/headingText/headingtext.component";
import ProductItem from "../../components/productItem/productitem.component";
import {ProductLoading} from "../../components/loading/loading.component";
import HollowButton from "../../components/hollowButton/hollowbutton.component"

function SearchScreen(props) {
  const search = props.match.params.search;
  const [products,setProducts] = useState({products : []});
  const [skip,setSkip] = useState(0);

  useEffect(() => {
    (async () => {
      let searchProduct = (
        await axios.post("/api/get/products", {
          only: { "name": { "$regex": search, "$options": "i" } },
          limit: 15,
          skip : skip
        })
      ).data;
        
      setProducts(s=>{          
          const newProducts = [...s.products , ...searchProduct.products];
          return {
              totalCount : searchProduct.totalCount,
              products : newProducts
          }
      })
    })();
  }, [skip]);

  useEffect(() => {
    (async () => {
      let searchProduct = (
        await axios.post("/api/get/products", {
          only: { "name": { "$regex": search, "$options": "i" } },
          limit: 15
        })
      ).data;
      setProducts(searchProduct)
    })();
  }, [search]);



  return (
      
  <div className="search-wrapper">
        <HeadingText text="Search Results" />
        <HeadingText text={search} size="3rem" color="#aaa" />
        <div className="search-divider" />
        <HeadingText text="Products" size="3rem" color="#FF0053" />
        <div className="products-itemgrid">
        {products.totalCount === undefined ? (
          <ProductLoading length={5} />
        ) : (
          products.products.map((prod) => (
            <ProductItem key={prod._id} product={prod} />
          ))
        )}
      </div>

           {
               products.totalCount && products.totalCount > products.products.length ?  <HollowButton  message="Load more" cb={()=>setSkip(s=>s+15)} /> : null
           }
  </div>);
}

export default SearchScreen;
