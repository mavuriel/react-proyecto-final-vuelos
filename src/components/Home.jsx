import useDataClient from '../hooks/useDataClient'
import FlightsForm from './FlightsForm'

export default function Home() {
  const { countryClient, currencyClient } = useDataClient()
  console.log({ countryClient, currencyClient })

  return <FlightsForm formType='large' />
}
