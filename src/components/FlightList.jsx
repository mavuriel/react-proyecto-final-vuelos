import { useParams } from 'react-router-dom'

export default function FlightList() {
  const { origen, destino, ida, vuelta } = useParams()

  return (
    <>
      <div>Lista de vuelos</div>
      {!vuelta ? (
        <p>{`${origen}, ${destino}, ${ida}`}</p>
      ) : (
        <p>{`${origen}, ${destino}, ${ida}, ${vuelta}`}</p>
      )}
    </>
  )
}
