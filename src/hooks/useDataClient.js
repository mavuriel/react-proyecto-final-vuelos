import { useEffect, useState } from 'react'

export default function useDataClient() {
  const [countryClient, setCountryClient] = useState({})
  const [currencyClient, setCurrencyClient] = useState({})

  useEffect(() => {
    const getDataClient = async () => {
      const fetchDataClient = await fetch(
        'https://airlabs.co/api/v9/suggest?q=mex&api_key=87afff74-f829-4d1c-aa7f-69642ff57638'
      )
      const { request } = await fetchDataClient.json()
      const { client } = request
      const { geo } = client
      const { country, country_code: countryCode } = geo
      setCountryClient({ country, countryCode })
    }

    getDataClient()
  }, [])

  useEffect(() => {
    if (!countryClient) return () => false
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

    getCurrencyClient()
  }, [countryClient])

  useEffect(() => {
    if (!countryClient || !currencyClient) return () => false
    console.log(countryClient)
    console.log(currencyClient)
  }, [countryClient, currencyClient])

  return {
    countryClient,
    currencyClient,
  }
}
