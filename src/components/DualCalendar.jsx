import { useCallback, useEffect, useState } from 'react'
import { Calendar } from '@natscale/react-calendar'

// TODO: cambiar luego con tailwind
import '@natscale/react-calendar/dist/main.css'
import useFormat from '../hooks/useFormat'

export default function DualCalendar() {
  const [value, setValue] = useState([])

  useEffect(() => {
    if (!value.length) return
    console.log(value)
    console.log(useFormat({ dates: value, type: 'api' }))
    console.log(useFormat({ dates: value, type: 'user' }))
  }, [value])

  const onChange = useCallback(
    val => {
      setValue(val)
    },
    [setValue]
  )

  return (
    <Calendar
      showDualCalendar
      isRangeSelector
      useDarkMode
      value={value}
      onChange={onChange}
    />
  )
}
