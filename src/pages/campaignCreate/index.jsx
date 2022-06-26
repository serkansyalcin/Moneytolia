import React from 'react';
import Layout from "../../components/layout";
import { campaignsHandler } from '../../services/storage';
import './styles.scss';

export default function CampaignsCreate() {
    const form = React.useRef();
    const [isFormSubmitted, setFormSubmitted] = React.useState(false);
    const [isFormError, setIsFormError] = React.useState(false);
    const [formData,setFormData] = React.useState({
        name: "",
        description: "",
    });
    let timeout;

    const handleSubmit = async (e) => {
        if (!form.current.checkValidity()) {
            return false;
        }
        e.preventDefault();
        setIsFormError(false);
        setFormSubmitted(false);
        const campaign = await campaignsHandler.addCampaign(formData);
        if (campaign) {
            setFormSubmitted(true);
            setFormData({
                name: "",
                description: "",
            });
            timeout = setTimeout(() => {
                setFormSubmitted(false);
                clearTimeout(timeout);
            }, 2000)
        } else {
            setIsFormError(true);
        }

    }

    const handleChange = ({target}) => {
        setFormData(formData => ({
            ...formData,
            [target.name]: target.value
        }))
    }

    return (
        <Layout>
            <div className="campaigns-create-content">
                <div className="campaigns-create-form">
                    {isFormError && <div className="form-error">Something went wrong! couldn't create a new campaign</div>}
                    {isFormSubmitted && <div className="form-success">A new campaign has been created</div>}
                    <form action="#" ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                value={formData.name}
                                name="name"
                                type="text"
                                placeholder="Campaign Name"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={formData.description}
                                name="description"
                                placeholder="Campaign Description"
                                required
                                rows={8}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
