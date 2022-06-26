import React from 'react';
import './styles.scss';

export default function Campaign({data}) {
    return (
        <div className='campaign-wrapper'>
            <div className="campaign-counter">
                {data.score}<br />
                Point
            </div>
            <div className="campaign-content">
                <h2 className="campaign-content-name">{data.name}</h2>
                <p className="campaign-content-description">{data.description}</p>
                <div className="campaign-content-actions">
                    <div className="counter-action-wrapper">
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div className="crud-action-wrapper">
                        <button>Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
