import React from 'react';
import Sidebar from "../../components/sidebar";
import './styles.scss';

export default function CampaignsCreate() {
    return (
        <div className="campaigns-create-page-wrapper">
            <Sidebar />
            <div className="campaigns-create-content"></div>
        </div>
    )
}
