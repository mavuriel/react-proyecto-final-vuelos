import useSearch from './hooks/useSearch'

export default function FlightOption() {
  const { loading, data } = useSearch('test')
  if (loading) return <p>cargando...</p>
  console.log(data)

  return <pre>{data}</pre>
}
