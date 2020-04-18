import React from 'react';
import CountryTile from '../CountryTile/CountryTile'

export default ({countries}) => {
    return (
        <div className="countriesTable">

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