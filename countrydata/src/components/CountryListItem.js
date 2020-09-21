import React from 'react'

const CountryListItem = ({country, showDetails}) => {
    return (
      <div>
        <li key={country.id}>{country.name} <button onClick={showDetails} value={country.name}>show</button></li>
      </div>
    )
}

export default CountryListItem