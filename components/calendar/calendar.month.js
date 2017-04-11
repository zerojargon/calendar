import React from 'react'
import { getWeekArray, getDayNames } from '../../helpers/date'
import { Table } from 'react-bootstrap'

const CalendarMonth = (props) => {
  const weekArray = getWeekArray(props.currentDate)
  return (
    <div>
      <Table className="calendar" responsive>
        <thead>
          <tr>
            {getDayNames().map(dayName => (
              <th>{dayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekArray.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                const className = (day.getMonth() !== props.currentDate.getMonth()) ? 'outside' : null
                return (
                  <td key={dayIndex} className={className}>{day.getDate()}</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CalendarMonth
