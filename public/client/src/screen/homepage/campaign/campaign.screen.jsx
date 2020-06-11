import React,{useEffect} from 'react';
import{withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CampaignCard from "../../../components/campaigncard/campaignCard.component";

import SmallBanner from "../../../components/banner/smallBanner/smallBanner.component";
import {SmallBannerLoading,CampaignCardLoading} from "../../../components/loading/loading.component";

import {getCampaignAsync} from "../../../redux/action/campaign.action";

 function Campaign(props) {

    useEffect(()=>{
        if(!props.campaign.init)
        props.getCampaignAsync();
    },[]);


    const renderCampaignData = ()=>{
        const data = [];

        props.campaign.campaigns.map(camp=>{
                    camp.items = camp.items.slice(0,4);
                    data.push(<SmallBanner key={"campaignSmallBanner"+camp._id} title={camp.name} image={camp.image} cb={()=> props.history.push(`/campaign/${camp._id}`) } />);

                    const items = <div key={"campaignDiv"+camp._id}  className="campaign-grid">
                    {camp.items.map(itm=><CampaignCard key={"campaignItm"+itm._id} title={itm.name} image={itm.image} />)}
                    </div>

                   data.push(items);
        })

        return data;
    }

    return props.campaign.campaignLoading ? (
        <div className="campaign-wrapper">
            <SmallBannerLoading />
            <div className="campaign-grid">
            <CampaignCardLoading />
            <CampaignCardLoading />
            <CampaignCardLoading />
            <CampaignCardLoading />
            </div>
        </div>
    ) : (
        <div className="campaign-wrapper">
            {renderCampaignData()}
        </div>
    )



}
 
const mapStateToProps = state =>({
    campaign : state.campaign
})


export default connect(mapStateToProps,{getCampaignAsync})(withRouter(Campaign))