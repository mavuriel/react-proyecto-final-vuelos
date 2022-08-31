import PropTypes from 'prop-types'

export default function DataList({ listName }) {
  return (
    // TODO: crear listado a partir de lo aeropuertos seleccionados
    <datalist id={listName}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </datalist>
  )
}

DataList.propTypes = {
  listName: PropTypes.string.isRequired,
}
