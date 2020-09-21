import React from 'react'
import CountryListItem from './CountryListItem'
import CountryDetails from './CountryDetails'


const Countries = ({countriesToShow, showDetails}) => {
    if (countriesToShow.length === 1) {
      return (
        <div>
          <CountryDetails country={countriesToShow[0]}/>
        </div>
      )
    }
    else {
      return (
        <div>
          <ul>
              {countriesToShow.map(country => <CountryListItem key={country.alpha2Code} country={country} showDetails={showDetails}/>)}
          </ul>
        </div>
      )
    }
    
}

export default Countries