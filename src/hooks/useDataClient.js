import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export default function useDataClient() {
  try {
    const [countryClient, setCountryClient] = useState(null)
    const [currencyClient, setCurrencyClient] = useState(null)
    const [airportsClient, setAirportsClient] = useState(null)
    const [airports, setAirports] = useLocalStorage('airports', {})
    const [, setDataClient] = useLocalStorage('dataClient', {})

    const filterAirports = unfilteredAirports => {
      const { countryCode } = countryClient

      if (countryCode in airports) {
        console.log('Ya esta en local storage 😃')
        return null
      }

      const filteredAirports = unfilteredAirports.filter(
        airport => airport.country_code === countryCode
      )
      const airportsList = { ...airports }
      airportsList[countryCode] = filteredAirports

      setAirportsClient(airportsList)
    }

    useEffect(() => {
      const getDataClient = async () => {
        const fetchDataClient = await fetch(
          'https://airlabs.co/api/v9/suggest?q=mex&api_key=87afff74-f829-4d1c-aa7f-69642ff57638'
        )
        const { request, response } = await fetchDataClient.json()
        const { client } = request
        const { airports_by_countries: airportsByCountry } = response
        const { geo } = client
        const { country, country_code: countryCode } = geo

        setCountryClient({ country, countryCode, airportsByCountry })
      }

      getDataClient()
    }, [])

    useEffect(() => {
      const getCurrencyClient = async () => {
        const fetchCurrencyClient = await fetch(
          `https://restcountries.com/v3.1/name/${countryClient?.country}`
        )
        let [{ currencies }] = await fetchCurrencyClient.json()
        currencies =
          'USD' in currencies
            ? { ...currencies }
            : {
                ...currencies,
                USD: { name: 'United States dollar', symbol: '$' },
              }
        setCurrencyClient(currencies)
      }

      if (countryClient) {
        getCurrencyClient()
        filterAirports(countryClient?.airportsByCountry)
      }
    }, [countryClient])

    useEffect(() => {
      if (airportsClient) setAirports(airportsClient)
      if (currencyClient) {
        const { country, countryCode } = countryClient
        setDataClient({ country, countryCode, currencyClient })
      }
    }, [currencyClient, airportsClient])

    return {
      countryClient,
      currencyClient,
    }
  } catch (error) {
    console.log('😡')
    console.error(error.message)
  }
}
