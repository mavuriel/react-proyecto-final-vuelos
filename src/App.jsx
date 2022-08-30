// import { useEffect, useState } from 'react'

// import FlightMockOption from './components/FlightMockOption'
// import SingleCalendar from './components/SingleCalendar'
// import DualCalendar from './components/DualCalendar'
// import useDataClient from './hooks/useDataClient'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [formSend, setFormSend] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<div>hola</div>}
        />
        <Route
          path='test'
          element={<div>prueba</div>}
        />
      </Routes>

      <h1>Buscador de vuelos</h1>

      <Formik
        initialValues={{
          origen: '',
          destino: '',
        }}
        validate={({ origen, destino }) => {
          const errors = {}

          if (!origen) errors.origen = 'Ingresa un origen'
          if (!destino) errors.destino = 'Ingresa un destino'

          return errors
        }}
        onSubmit={(valores, { resetForm }) => {
          // TODO: necesito limpiar el form??
          resetForm()
          console.log('formulario enviado')
          console.table(valores)
          // TODO: hacer la consulta a la api

          setFormSend(true)

          navigate('/test')

          setTimeout(() => setFormSend(false), 3000)
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form action='/test'>
            <div>
              <label htmlFor='origen'>Origen</label>
              <Field
                type='text'
                id='origen'
                name='origen'
                placeholder='Mexico'
              />
              <ErrorMessage
                name='origen'
                component={() => <div>{errors.origen}</div>}
              />
            </div>
            <div>
              <label htmlFor='destino'>Destino</label>
              <Field
                type='text'
                id='destino'
                name='destino'
                placeholder='Mexico'
              />
              <ErrorMessage
                name='destino'
                component={() => <div>{errors.destino}</div>}
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
            >
              Enviar
            </button>
            {formSend && <p>Realizando la consulta</p>}
          </Form>
        )}
      </Formik>

      <Outlet />
    </>
  )
  // return <FlightMockOption />
  /* return (
    <>
      <DualCalendar />
      <br />
      <hr />
      <br />
      <SingleCalendar />
    </>
  ) */
  // const { countryClient, currencyClient } = useDataClient()
  // console.log({ countryClient, currencyClient })
  // const { country, countryCode } = countryClient
}

// TODO: guardar en local la data del cliente
// TODO: guardar en local la data de los aeropuertos que busca
// TODO: guardar en local la data del destino que busca

export default App
