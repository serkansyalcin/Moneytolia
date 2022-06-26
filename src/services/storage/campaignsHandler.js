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

async function editCampaign(id, data) {
    let campaigns = localStorage.getItem('moneytolia-sample-campaigns');
    campaigns ? campaigns = JSON.parse(campaigns) : campaigns = {};
    const campaign = {
        ...campaigns[id],
        ...data,
    };
    campaigns = {
        ...campaigns,
        [id]: campaign,
    }
    await localStorage.setItem('moneytolia-sample-campaigns', JSON.stringify(campaigns));
    return true;
}

async function deleteCampaign(id) {
    let campaigns = localStorage.getItem('moneytolia-sample-campaigns');
    campaigns ? campaigns = JSON.parse(campaigns) : campaigns = {};
    let {[id]: _, ...newCampaigns} = campaigns;
    await localStorage.setItem('moneytolia-sample-campaigns', JSON.stringify(newCampaigns));
    return newCampaigns;
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
    deleteCampaign
}


