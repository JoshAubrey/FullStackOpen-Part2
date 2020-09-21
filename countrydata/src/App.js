import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'


function App() {
  const [ countries, setCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    console.log('effect')
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        console.log('promise fulfilled')
        setCountries(data)
      })
  }, [])

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const showDetails = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const countriesToShow = newSearch === ''
    ? countries
    : countries.filter(countries => countries.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <Filter value={newSearch} onChange={handleSearchChange}/>

      <Countries countriesToShow={countriesToShow} showDetails={showDetails}/>
    </div>
  )
}

export default App
