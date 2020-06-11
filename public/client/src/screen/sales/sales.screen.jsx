import React,{useEffect,useState} from 'react'
import axios from "axios";
import HeroBanner from "../../components/banner/heroBanner/herobanner.component";
import ProductItem from "../../components/productItem/productitem.component";

// import HollowButton from "../../../components/hollowButton/hollowbutton.component";

export default  function ProductsScreen(props) {
    const id = props.match.params.id;
    const [sale,setSale] = useState(null);


    useEffect(()=>{
      (
            async()=>{
              const sales = await (await axios.post("/api/get/sale",{only:{_id : id}})).data[0];      
              setSale(sales);

            }
        )()

        
    },[])



    
   return sale !== null ? (
    <div className="products-wrapper" >
    <HeroBanner title={sale.name} image={sale.image}/>
    <div className="products-itemgrid">
       {
           sale && sale.items.map(p=><ProductItem key={"sales"+p._id} product={p} />)
       }
    </div>

</div>) : ( <div></div> )
}
