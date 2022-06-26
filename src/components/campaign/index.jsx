import React from 'react';
import { campaignsHandler } from "../../services/storage";
import './styles.scss';

export default function Campaign({data, onEdit, onDelete}) {
    const [vote,setVote] = React.useState(data.score);

    const handleVote = async(mode) => {
        const newVote = mode === 'high' ? vote + 1 : vote === 0 ? 0 : vote - 1;
        const campaign = await campaignsHandler.editCampaign(data.id, {
            score: newVote
        });
        console.log(vote);
        await setVote(newVote)
    }

    return (
        <div className='campaign-wrapper'>
            <div className="campaign-counter">
                {vote}<br />
                Point
            </div>
            <div className="campaign-content">
                <h2 className="campaign-content-name">{data.name}</h2>
                <p className="campaign-content-description">{data.description}</p>
                <div className="campaign-content-actions">
                    <div className="counter-action-wrapper">
                        <button onClick={() => handleVote("high")}>+</button>
                        <button onClick={() => handleVote("low")}>-</button>
                    </div>
                    <div className="crud-action-wrapper">
                        <button onClick={onEdit}>Edit</button>
                        <button onClick={onDelete} className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
