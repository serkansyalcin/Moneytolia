import React from 'react';
import { credsHandler } from '../../services/storage/index';
import './styles.scss';

export default function Login({onSuccess}) {
    const form = React.useRef();
    const [formData,setFormData] = React.useState({
        username: "",
        password: "",
    });
    const [isFormError,setFormError] = React.useState(false);

    const handleChange = ({target}) => {
        setFormData(formData => ({
            ...formData,
            [target.name]: target.value
        }))
    }
    const handleSubmit = async(e) => {
        if (!form.current.checkValidity()) {
            return false;
        }
        e.preventDefault();
        const isCredsValid = await credsHandler(formData);
        if (isCredsValid) {
            onSuccess();
        } else {

        }

    }

    return (
        <div className="login-page-wrapper">
            <div className="login-form-container">
                <form action="#" ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            value={formData.username}
                            name="username"
                            placeholder="Username"
                            type="text"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={formData.password}
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
