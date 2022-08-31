import PropTypes from 'prop-types'
import { ErrorMessage, Field } from 'formik'
import DataList from './DataList'

export default function FormField({
  type,
  name,
  label,
  placeholder,
  isList,
  errors,
}) {
  const listName = isList ? `${name}List` : undefined

  return (
    <div>
      {/* TODO: filtrar y mostrar los aeropuertos del pais seleccionado */}

      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        list={listName}
      />

      {isList && <DataList listName={listName} />}

      <ErrorMessage
        name={name}
        component={() => <div>{errors}</div>}
      />
    </div>
  )
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isList: PropTypes.bool,
  errors: PropTypes.string,
}
