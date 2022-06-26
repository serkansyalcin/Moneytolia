import React from 'react';
import Sidebar from "../sidebar";
import Header from '../header';
import './styles.scss';

export default function Layout({children}) {
    return (
        <div className="base-container">
            <Sidebar />
            <div className="content-wrapper">
                <Header />
            </div>
        </div>
    )
}
