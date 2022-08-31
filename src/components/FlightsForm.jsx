import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleCalendar from './SingleCalendar'
import DualCalendar from './DualCalendar'
import FormField from './FormField'

export default function FlightsForm(props) {
  console.log({ props })
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

        // TODO: validar las fechas
        if (!origen) errors.origen = 'Ingresa un origen'
        if (!destino) errors.destino = 'Ingresa un destino'

        return errors
      }}
      onSubmit={(valores, { resetForm }) => {
        // resetForm()

        console.log('formulario enviado')

        console.log({ valores })

        setFormSend(true)

        // TODO: enviar los datos a la ruta para hacer la consulta a la api
        navigate('/test')

        setTimeout(() => setFormSend(false), 3000)
      }}
    >
      {({ values, errors, isSubmitting, setFieldValue }) => (
        // TODO: generar las busquedas de acuerdo a lo que teclea despues de 3 segundos sin teclear
        <Form>
          <FormField
            type='text'
            label='Origen 🛫'
            name='origen'
            placeholder='Mexico'
            isList={true}
            errors={errors.origen}
          />
          <FormField
            type='text'
            label='Destino 🏖️'
            name='destino'
            placeholder='Mexico'
            isList={true}
            errors={errors.destino}
          />
          <FormField
            type='checkbox'
            label='¿Vuelta? 🧐'
            name='conVuelta'
            errors={errors.conVuelta}
          />

          <div>
            {/* //?como cambiarlo al otro componente */}
            {/* //TODO: modificar el calendario sencillo para formik */}
            {values.conVuelta ? (
              <Field
                name='calendario'
                component={DualCalendar}
                setFieldValue={setFieldValue}
              />
            ) : (
              <SingleCalendar />
            )}
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
