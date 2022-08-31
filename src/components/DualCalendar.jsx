import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { Calendar } from '@natscale/react-calendar'

// TODO: cambiar luego con tailwind
import '@natscale/react-calendar/dist/main.css'
import useFormat from '../hooks/useFormat'
export default function DualCalendar({ setFieldValue }) {
  const [date, setDate] = useState([])

  const [datesFormat, setDatesFormat] = useState([])

  useEffect(() => {
    if (!date.length) return
    const api = useFormat({ dates: date, type: 'api' })
    const user = useFormat({ dates: date, type: 'user' })

    setDatesFormat({ api, user })
  }, [date])

  const onChange = useCallback(
    val => {
      setDate(val)
    },
    [setDate]
  )

  useEffect(() => {
    // ? investigar si hay una mejor manera de hacer esto
    const setFieldDate = async () => {
      setFieldValue('fechas', datesFormat)
    }

    setTimeout(() => setFieldDate(), 1000)
  }, [datesFormat])

  return (
    <Calendar
      showDualCalendar
      isRangeSelector
      useDarkMode
      value={date}
      onChange={onChange}
    />
  )
}

DualCalendar.propTypes = {
  setFieldValue: PropTypes.func,
}
