import React from 'react';
import Layout from "../../components/layout";
import './styles.scss';

export default function CampaignsCreate() {
    const form = React.useRef()
    const [formData,setFormData] = React.useState({
        name: "",
        description: "",
    })

    const handleSubmit = (e) => {
        if (!form.current.checkValidity()) {
            return false;
        }
        e.preventDefault();

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
                    <form action="#" ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="description"
                                placeholder="Description"
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
