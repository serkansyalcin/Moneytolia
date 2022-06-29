import React from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from '../../assets/img/React.png';
import './styles.scss';


export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt=""/>
            </div>
            <div className="menu-container">
                <ul>
                    <li className={location.pathname === '/campaigns-list' ? 'active' : ''}><Link to="/campaigns-list">Campaigns List</Link></li>
                    <li className={location.pathname === '/campaigns-create' ? 'active' : ''}><Link to="/campaigns-create">Campaigns Create</Link></li>
                </ul>
            </div>
        </div>
    )
}
