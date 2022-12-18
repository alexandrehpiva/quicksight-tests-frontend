import dayjs from '../helpers/dayjs'
import { dateTypes } from '../constants/date'

export const getDate = (date) => dayjs(date).format(dateTypes.dateBR)

export const getHour = (date) => dayjs(date).format(dateTypes.hourMinute)
