import React from 'react';
import Layout from "../../components/layout";
import Campaign from "../../components/campaign";
import { campaignsHandler } from "../../services/storage";
import search from '../../assets/img/search.svg';
import './styles.scss';

export default function CampaignsList() {
    const form = React.useRef();
    const [isFormError, setIsFormError] = React.useState(false);
    const [formData,setFormData] = React.useState({
        name: "",
        description: ""
    });
    const [campaigns,setCampaigns] = React.useState({});

    console.log(campaigns);

    React.useEffect(() => {
        const init = async () =>  {
            const data = await campaignsHandler.getCampaigns();
            setCampaigns(data);
        }
        init();
    }, []);

    const handleSubmit = (e) => {
        if (!form.current.checkValidity()) {
            return false;
        }
        e.preventDefault();
        setIsFormError(false);
    }
    const handleChange = ({target}) => {
        setFormData(formData => ({
            ...formData,
            [target.name]: target.value
        }))
    }
    const handleSearch = ({target}) => {

    }
    const handleFilter = async({target}) => {
        const data = filterCampaigns(campaigns, target.value);
        setCampaigns(data);
    }
    const filterCampaigns = (data, mode) => {
        let _data = Object.values(data);
        _data.sort((a,b) => mode === 'high' ? b.score - a.score : a.score - b.score);
        const newData = {};
        _data.forEach(d => newData[d.id] = d);
        return newData;
    }


    return (
        <Layout>
            <div className="campaigns-list-content">
                <div className="campaigns-list-content-subheader">
                    <div className="search-input-wrapper">
                        <img src={search} alt=""/>
                        <input
                            placeholder="Search"
                            type="text"
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="filter-select-wrapper">
                        <select onChange={handleFilter}>
                            <option value="high">Highest score</option>
                            <option value="low">Lowest score</option>
                        </select>
                    </div>
                </div>
                <div className="campaigns-listing">
                    {Object.values(campaigns).length > 0 ?
                        Object.values(campaigns).map((c,i) => <Campaign key={i} data={c} />) :
                        <div className="empty-campaigns">
                            No campaigns found
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}
