import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import FlightList from './components/FlightList'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='flights/:origen/to/:destino/:ida'
          element={<FlightList />}
        >
          <Route
            path=':vuelta'
            element={<FlightList />}
          />
        </Route>

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>

      <Outlet />
    </>
  )
}

// TODO: guardar en local la data del cliente
// TODO: guardar en local la data de los aeropuertos que busca
// TODO: guardar en local la data del destino que busca

export default App
