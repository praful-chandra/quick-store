import React,{useEffect,useState} from 'react'
import axios from "axios";
import HeroBanner from "../../../components/banner/heroBanner/herobanner.component";
import ProductItem from "../../../components/productItem/productitem.component";

import HollowButton from "../../../components/hollowButton/hollowbutton.component";

export default  function ProductsScreen(props) {
    const id = props.match.params.id;
    const [category,setCategory] = useState(null);
    const [products,setProducts] = useState(null);
    const [skip,setSkip] = useState(0);

    useEffect(()=>{
      (
            async()=>{
              const cate = await (await axios.post("/api/get/categories",{only:{_id : id}})).data[0];      
              setCategory(cate);
              const newProd = await (await axios.post("/api/get/products",{only:{_id : cate.Products},limit:10,skip})).data
              setProducts(newProd)
            }
        )()

        
    },[])

    useEffect(()=>{
       if(products) (
            async()=>{
                const newProd = await (await axios.post("/api/get/products",{only:{_id : category.Products},limit:10,skip})).data.products
                setProducts(p=>({products :[...p.products , ...newProd]}))
            }
        )()
    },[skip])

   
   
    
   return category !== null ? (
    <div className="products-wrapper" >
    <HeroBanner title={category.name} image={category.image}/>
    <div className="products-itemgrid">
       {
           products && products.products.map(p=><ProductItem product={p} />)
       }
    </div>
    {
       products && products.totalCount > products.products.length ? <HollowButton message="Load More" cb={()=>setSkip(s=>s+10)}/> : null
    }
</div>
   ) : ( <div></div> )
}
