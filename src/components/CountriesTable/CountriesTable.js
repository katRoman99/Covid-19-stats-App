import React from 'react';
import CountryTile from '../CountryTile/CountryTile'
import './CountriesTable.scss'
import CountryTileHeader from '../CountryTileHeader/CountryTileHeader';

export default ({countries, sortCountries, sortTotalConfirmed, sortTotalDeaths, sortTotalRecovered}) => {
    return (
        <div className="countriesTable">
            <CountryTileHeader
                sortCountries={sortCountries}
                sortTotalConfirmed={sortTotalConfirmed}
                sortTotalDeaths={sortTotalDeaths}
                sortTotalRecovered={sortTotalRecovered}
            />
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