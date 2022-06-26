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
    const [filterMode,setFilterMode] = React.useState('low')

    React.useEffect(() => {
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
        if (!/^$/.test(target.value)) {
            let _data = Object.values(campaigns);
            _data = _data.filter(d => d.name.toLowerCase().includes(target.value.toLowerCase()));
            console.log(_data);
            let newData = {};
            _data.forEach(d => newData[d.id] = d);
            newData = filterCampaigns(newData, filterMode);
            setCampaigns(newData);
        } else {
            init();
        }

    }
    const handleFilter = async({target}) => {
        await setFilterMode(target.value);
        const data = filterCampaigns(campaigns, target.value);
        setCampaigns(data);
    }
    const handleDelete = () => {

    }
    const handleEdit = () => {

    }

    const filterCampaigns = (data, mode) => {
        let _data = Object.values(data);
        _data.sort((a,b) => mode === 'high' ? b.score - a.score : a.score - b.score);
        const newData = {};
        _data.forEach(d => newData[d.id] = d);
        return newData;
    }
    const init = async () =>  {
        let data = await campaignsHandler.getCampaigns();
        data = filterCampaigns(data, filterMode);
        setCampaigns(data);
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
                            <option value="low">Lowest score</option>
                            <option value="high">Highest score</option>
                        </select>
                    </div>
                </div>
                <div className="campaigns-listing">
                    {Object.values(campaigns).length > 0 ?
                        Object.values(campaigns).map((c,i) => <Campaign key={i} data={c} onDelete={() => handleDelete(c.id)} onEdit={() => handleEdit()} />) :
                        <div className="empty-campaigns">
                            No campaigns found
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}
