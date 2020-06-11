import {CAMPAIGN_ACTIONS} from "./action.types";
import axios from "axios";


const campaignLoad = () =>({
    type : CAMPAIGN_ACTIONS.CAMPAIGN_LOADING
})

const campaignLoadDone = ()=>({
    type : CAMPAIGN_ACTIONS.CAMPAIGN_LOADING_DONE
})

const getCampaign = (campaigns)=>({
    type : CAMPAIGN_ACTIONS.GET_CAMPAIGN,
    payload : campaigns
})


export const getCampaignAsync = () =>async dispatch=>{
    dispatch(campaignLoad());

    try{

        const campaigns = await (await axios.post("/api/get/campaign")).data;
       
        dispatch(getCampaign(campaigns));

    }
    catch(err){
      alert("error occured");
        
    }
    finally{
        dispatch(campaignLoadDone())
    }
}