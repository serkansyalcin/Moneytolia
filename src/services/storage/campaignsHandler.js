async function addCampaign(data) {
    const timeStamp = Date.now()
    const campaign = {
        ...data,
        id: timeStamp,
        score: 0,
        date_created: timeStamp
    };
    let campaigns = localStorage.getItem('moneytolia-sample-campaigns');
    campaigns ? campaigns = JSON.parse(campaigns) : campaigns = {};
    campaigns = {
        ...campaigns,
        [campaign.id]: campaign,
    }
    await localStorage.setItem('moneytolia-sample-campaigns', JSON.stringify(campaigns));
    return true;
}

async function editCampaign(data) {

}

async function getCampaigns() {
    let campaigns = localStorage.getItem('moneytolia-sample-campaigns');
    campaigns ? campaigns = JSON.parse(campaigns) : campaigns = {};
    return campaigns;
}


export default {
    addCampaign,
    editCampaign,
    getCampaigns,
}


