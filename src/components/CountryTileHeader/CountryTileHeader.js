import React from 'react';

import './CountryTileHeader.scss';

export default ({sortCountries, sortTotalConfirmed}) => {

    return (
        <div className="countryTileHeader">
                <div onClick={sortCountries} className="headerTile">Country</div>
                <div onClick={sortTotalConfirmed} className="headerTile">Total confirmed</div>
                <div className="headerTile">Total deaths</div>
                <div className="headerTile">Total recovered</div>
        </div>
    )
}