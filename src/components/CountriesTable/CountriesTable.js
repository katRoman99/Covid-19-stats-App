import React from 'react';
import CountryTile from '../CountryTile/CountryTile'
import './CountriesTable.scss'
import CountryTileHeader from '../CountryTileHeader/CountryTileHeader';

export default ({countries}) => {
    return (
        <div className="countriesTable">
            <CountryTileHeader/>
            {countries.map( country =>
                <CountryTile
                Country={country.Country}
                TotalConfirmed={country.TotalConfirmed}
                TotalDeaths={country.TotalDeaths}
                TotalRecovered={country.TotalRecovered}
                />
            )}
        </div>
    )
}