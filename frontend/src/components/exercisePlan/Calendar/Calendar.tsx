import { useState, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Temporal } from '@js-temporal/polyfill'
import { dayOfWeekList, filterDate } from '@/types/exercisePlan'
import {
  CalendarContainer,
  CalendarHeader,
  ShowCalendarDate,
  MonthPicker,
  MonthChangeBtn,
  CalendarWeekDay,
  CalendarWeekDayItems,
  CalendarDays,
  CalendarDaysItems,
  EmptyBox,
  ShowDate,
} from './Calendar.style'

const getFirstDayOfMonth = (date: Temporal.PlainDate, month: number) => {
  return Temporal.Calendar.from(date).dateFromFields(date).with({ month: month, day: 1 }).dayOfWeek
}

const getYear = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).dateFromFields(date).year
}

const getMonth = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).dateFromFields(date).month
}

const getDaysInMonth = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).daysInMonth(date)
}

const formatDate = (date: Temporal.PlainDate) => {
  const year = Temporal.Calendar.from(date).dateFromFields(date).year
  const month = Temporal.Calendar.from(date).dateFromFields(date).month
  const day = Temporal.Calendar.from(date).dateFromFields(date).day

  return `${year}년  ${month < 10 ? '0' + month : month}월  ${day < 10 ? '0' + day : day}일`
}

const getPrevMonth = (date: Temporal.PlainDate) => {
  return date.subtract({ months: 1 })
}

const getNextMonth = (date: Temporal.PlainDate) => {
  return date.add({ months: 1 })
}

const createDate = (year: number, month: number, day: number) => {
  return new Temporal.PlainDate(year, month, day)
}

interface DaysItemsProps {
  year: number
  month: number
  day: number
  onClickHandler: (date: Temporal.PlainDate) => void
}

function DaysItmes({ year, month, day, onClickHandler }: DaysItemsProps) {
  const dateId = '' + year + month + day
  return (
    <CalendarDaysItems key={dateId} onClick={() => onClickHandler(createDate(year, month, day))}>
      {day}
    </CalendarDaysItems>
  )
}

function Calendar() {
  const today = Temporal.Now.plainDateISO()
  const [date, setDate] = useState(today)
  const [selectedDate, setSelectedDate] = useState(today)
  const week = useRecoilValue(dayOfWeekList)
  const year = getYear(date)
  const month = getMonth(date)
  const days = getDaysInMonth(date)
  const firstDay: number = getFirstDayOfMonth(date, month)
  const numericDate: number = firstDay
  const setFilterDate = useSetRecoilState(filterDate)

  useEffect(() => {
    setFilterDate(selectedDate.toString())
  }, [selectedDate])

  const handlePrev = () => {
    setDate(getPrevMonth(date))
  }

  const handleNext = () => {
    setDate(getNextMonth(date))
  }

  const handleDateSelection = (date: Temporal.PlainDate) => {
    setSelectedDate(date)
  }

  const renderCalendarDays = () => {
    const startDay = numericDate === 7 ? 1 : firstDay
    const totalDay = numericDate === 7 ? days : days + startDay

    return Array(totalDay)
      .fill(1)
      .map((item, index) => {
        const currentDay = index + 1
        const shouldRender = numericDate === 7 || index >= startDay

        return shouldRender ? (
          <DaysItmes
            key={`day-item-${year}-${month}-${currentDay}`}
            year={year}
            month={month}
            day={numericDate === 7 ? currentDay : currentDay - startDay}
            onClickHandler={handleDateSelection}
          />
        ) : (
          <EmptyBox key={'E' + index}></EmptyBox>
        )
      })
  }

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <ShowCalendarDate>
            {year}년 {month}월
          </ShowCalendarDate>
          <MonthPicker>
            <MonthChangeBtn onClick={handlePrev}>{'<'}</MonthChangeBtn>
            <MonthChangeBtn onClick={handleNext}>{'>'}</MonthChangeBtn>
          </MonthPicker>
        </CalendarHeader>
        <CalendarWeekDay>
          {week?.map((item) => <CalendarWeekDayItems key={String(item)}>{item}</CalendarWeekDayItems>)}
        </CalendarWeekDay>
        <CalendarDays>{renderCalendarDays()}</CalendarDays>
      </CalendarContainer>
      <ShowDate>{formatDate(selectedDate)} </ShowDate>
    </>
  )
}

export default Calendar
