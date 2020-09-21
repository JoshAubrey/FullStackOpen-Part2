import React, {useState, useEffect } from 'react'

const CountryDetails = ({country}) => {

  const api_key = process.env.REACT_APP_API_KEY
  const [ weatherIconSrc, setWeatherIconSrc ] = useState('')
  const [ weatherCondition, setWeatherCondition ] = useState('')
  const [ mainTemp, setMainTemp ] = useState('')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=imperial&appid=${api_key}`, { mode: "cors" })
      .then(response => response.json())
      .then(response => {
        console.log(response)

        let iconCode = response.weather[0].icon
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
        setWeatherIconSrc(iconUrl)
        setWeatherCondition(response.weather[0].main)
        setMainTemp(response.main.temp.toFixed(0))

      })
      .catch(function(err) {
        console.log(`could not find weather for ${country.capital}`)
      }) // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>languages:</h2>
      <ul>{country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}</ul>
      <img src={country.flag} alt="flag" style={{height: '150px', width: 'auto', border: '1px solid black'}}/>
      <h2>Weather in {country.capital}</h2>
      <p>condition: {weatherCondition}</p>
      <p>temperature: {mainTemp} ℉</p>
      <img src={weatherIconSrc} alt="weather icon" style={{height: '100px', width: 'auto'}}/>
      
    </div>
  )
}

export default CountryDetails