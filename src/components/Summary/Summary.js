import React from 'react';

import './Summary.scss'

export default ({global}) => {

    const NewConfirmed = global.NewConfirmed;
    const TotalConfirmed = global.TotalConfirmed;
    const NewDeaths = global.NewDeaths;
    const TotalDeaths = global.TotalDeaths;
    const NewRecovered = global.NewRecovered;
    const TotalRecovered = global.TotalRecovered;

    return (
        <div className="summary">
            <span className="infoHeader">Global statistics</span>
            <div className="sticky">
                <div className="infoNumber">
                    <span>NewConfirmed</span>
                    <span className="globalNumber">{NewConfirmed}</span>
                </div>

                <div className="infoNumber">
                    <span>TotalConfirmed</span>
                    <span className="globalNumber">{TotalConfirmed}</span>
                </div>

                <div className="infoNumber">
                    <span>NewDeaths</span>
                    <span className="globalNumber">{NewDeaths}</span>
                </div>

                <div className="infoNumber">
                    <span>TotalDeaths</span>
                    <span className="globalNumber">{TotalDeaths}</span>
                </div>

                <div className="infoNumber">
                    <span>NewRecovered</span>
                    <span className="globalNumber">{NewRecovered}</span>
                </div>

                <div className="infoNumber">
                    <span>TotalRecovered</span>
                    <span className="globalNumber">{TotalRecovered}</span>
                </div>
            </div>
        </div>
    )
}