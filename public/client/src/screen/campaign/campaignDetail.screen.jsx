import React,{useEffect,useState} from 'react'
import axios from "axios";
import HeroBanner from "../../components/banner/heroBanner/herobanner.component";
import ProductItem from "../../components/productItem/productitem.component";

// import HollowButton from "../../../components/hollowButton/hollowbutton.component";

export default  function CampaignDetail(props) {
    const id = props.match.params.id;
    const [campaign,setCampaign] = useState(null);


    useEffect(()=>{
      (
            async()=>{
              const campaign = await (await axios.post("/api/get/campaign",{only:{_id : id}})).data[0];      
              setCampaign(campaign);

            }
        )()

        
    },[])



    
   return campaign !== null ? (
    <div className="products-wrapper" >
    <HeroBanner title={campaign.name} image={campaign.image}/>
    <div className="products-itemgrid">
       {
           campaign && campaign.items.map(p=><ProductItem key={"campaigns"+p._id} product={p} />)
       }
    </div>

</div>) : ( <div></div> )
}
