import { useCallback, useEffect, useState } from 'react'
import { Calendar } from '@natscale/react-calendar'

// TODO: cambiar luego con tailwind
import '@natscale/react-calendar/dist/main.css'
import useFormat from '../hooks/useFormat'

export default function SingleCalendar() {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    if (!value) return
    console.log(value)
    console.log(useFormat({ dates: [value], type: 'api' }))
    console.log(useFormat({ dates: [value], type: 'user' }))
  }, [value])

  const onChange = useCallback(
    val => {
      setValue(val)
    },
    [setValue]
  )

  return (
    <Calendar
      useDarkMode
      value={value}
      onChange={onChange}
    />
  )
}
