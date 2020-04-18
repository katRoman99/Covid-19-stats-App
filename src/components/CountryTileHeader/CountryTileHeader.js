import React from 'react';

import './CountryTileHeader.scss';

export default () => {

    return (
        <div className="countryTileHeader">
                <div className="headerTile">Country</div>
                <div className="headerTile">Total confirmed</div>
                <div className="headerTile">Total deaths</div>
                <div className="headerTile">Total recovered</div>
        </div>
    )
}