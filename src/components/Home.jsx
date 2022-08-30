import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import FlightMockOption from './components/FlightMockOption'
// import SingleCalendar from './components/SingleCalendar'
// import DualCalendar from './components/DualCalendar'
// import useDataClient from './hooks/useDataClient'

export default function Home() {
  // const { countryClient, currencyClient } = useDataClient()
  // console.log({ countryClient, currencyClient })
  // const { country, countryCode } = countryClient

  const [formSend, setFormSend] = useState(false)

  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        // TODO: mostrar como origen el primer aeropuerto del pais del cliente
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
        // resetForm()

        console.log('formulario enviado')
        console.table(valores)

        setFormSend(true)

        // TODO: enviar los datos a la ruta para hacer la consulta a la api
        navigate('/test')

        setTimeout(() => setFormSend(false), 3000)
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form action='/test'>
          <div>
            {/* TODO: filtrar y mostrar los aeropuertos del pais seleccionado */}
            {/* TODO: separar en componente cada input y label */}
            <label htmlFor='origen'>Origen</label>
            <Field
              type='text'
              id='origen'
              name='origen'
              placeholder='Mexico'
              list='test'
            />
            {/* Separarlo y llenarlo con el listado de aeropuertos */}
            <datalist id='test'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </datalist>
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
  )
}
