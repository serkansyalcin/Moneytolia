import React from 'react';
import Sidebar from "../../components/sidebar";
import './styles.scss';

export default function CampaignsList() {
    return (
        <div className="campaigns-list-page-wrapper">
            <Sidebar />
            <div className="campaigns-list-content"></div>
        </div>
    )
}
