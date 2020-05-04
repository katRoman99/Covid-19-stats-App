import React from 'react';

import './CountryTileHeader.scss';

export default ({sortCountries, sortTotalConfirmed, sortTotalDeaths, sortTotalRecovered}) => {

    return (
        <div className="countryTileHeader">
                <div onClick={sortCountries} className="headerTile">Country</div>
                <div onClick={sortTotalConfirmed} className="headerTile">Total confirmed</div>
                <div onClick={sortTotalDeaths} className="headerTile">Total deaths</div>
                <div onClick={sortTotalRecovered} className="headerTile">Total recovered</div>
        </div>
    )
}