import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/login";
import CampaignsList from "../pages/campaignsList";
import CampaignsCreate from '../pages/campaignCreate';
import { isAuthenticated } from "../services/storage/credsHandler";

export default function Navigation() {
    let navigate = useNavigate();
    const [isInit,setIsInit] = React.useState(false);
    const [isLoggedIn,setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        init();
    }, []);

    React.useEffect(() => {
        isLoggedIn ? navigate('/campaigns-list', { replace: true }) : navigate('/login', { replace: true });
    }, [isLoggedIn]);

    const init = async() => {
        const authenticationStatus = await isAuthenticated();
        setIsInit(true);
        setIsLoggedIn(authenticationStatus);
    }

    return (
        <Routes>
            <Route path="/login" element={<Login onSuccess={() => setIsLoggedIn(true)} />} />
            <Route path="/campaigns-list" element={<CampaignsList />} />
            <Route path="/campaigns-create" element={<CampaignsCreate />} />
        </Routes>
    )
}
