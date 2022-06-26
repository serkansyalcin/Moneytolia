import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/login";
import CampaignsList from "../pages/campaignsList";
import CampaignsCreate from '../pages/campaignCreate';
import { bootstrapper } from "../services/storage";

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
        await bootstrapper();
        setIsInit(true);
        if (!isLoggedIn) {

        }
    }

    return (
        <Routes>
            <Route path="/login" element={<Login onSuccess={() => setIsLoggedIn(true)} />} />
            <Route path="/campaigns-list" element={<CampaignsList />} />
            <Route path="/campaigns-create" element={<CampaignsCreate />} />
        </Routes>
    )
}
