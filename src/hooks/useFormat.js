import dayjs from 'dayjs'

export default function useFormat({ dates, type }) {
  const formatTypes = {
    api: 'YYYY-MM-DD',
    user: 'DD-MM-YYYY',
  }[type]

  return dates?.map(date => dayjs(date).format(formatTypes)) ?? []
}
