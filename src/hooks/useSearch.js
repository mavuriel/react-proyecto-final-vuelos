import { useEffect, useState } from 'react'

const useSearch = params => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  // TODO: es mejor crearlo con promesas o async await??
  useEffect(() => {
    const dataFlight = async () => {
      try {
        const BASE_URL = import.meta.env.VITE_API_URL
        const PARAMS =
          params ??
          'originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2022-11-01&adults=1&nonStop=false&max=250'
        const URL = `${BASE_URL}/v2/shopping/flight-offers?${PARAMS}`
        const TOKEN_TYPE = import.meta.env.VITE_TOKEN_TYPE
        const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

        const fetchAPI = await fetch(URL, {
          method: 'GET',
          headers: {
            Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        const response = await fetchAPI.json()

        setLoading(false)
        setData(response)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setData({ response: 'error', message: error })
      }
    }

    dataFlight()
  }, [])

  return { loading, data }
}

export default useSearch
