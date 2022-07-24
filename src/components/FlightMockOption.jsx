import { flightsWithoutReturn } from '../mocks/fligths'

export default function FlightMockOption() {
  console.log({ flightsWithoutReturn })
  const { data } = flightsWithoutReturn

  return (
    <ul>
      {data.map(({ id, itineraries }) => {
        return (
          <li key={self.crypto.randomUUID()}>
            Opcion {id}:
            {itineraries.map(({ segments }) => {
              return segments.map(({ id, arrival, departure }) => {
                return (
                  <ul key={self.crypto.randomUUID()}>
                    <li>Viaje: {id}</li>
                    <li>
                      Salida de {arrival.iataCode} en la terminal{' '}
                      {arrival.terminal} a las {arrival.at}
                    </li>
                    <li>
                      Llegada en {departure.iataCode} en la terminal{' '}
                      {departure.terminal} a las {departure.at}
                    </li>
                  </ul>
                )
              })
            })}
          </li>
        )
      })}
    </ul>
  )
}
