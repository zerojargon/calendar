import React from 'react'
import { Col, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { getMonthNames } from '../../helpers/date'
import { Router } from '../../routes'

const CalendarMonth = (props) => {
  const selectedMonth = props.currentDate.getMonth()
  const selectedYear = props.currentDate.getFullYear()
  const availableMonths = getMonthNames()

  const navigateCalendar = function (year, month) {
    Router.pushRoute('calendar', { year: year, month: month + 1 })
  }

  const handleMonthChange = function (e) {
    const newMonth = parseInt(e.target.value, 10)
    navigateCalendar(selectedYear, newMonth)
  }

  const handleYearChange = function (e) {
    const newYear = parseInt(e.target.value, 10)
    navigateCalendar(newYear, selectedMonth)
  }

  const incrementMonth = function (e) {
    e.preventDefault()
    // if we're on december, we want to increment the year and reset the month to Jan
    const isIncrementingYear = selectedMonth === 11
    const newMonth = (isIncrementingYear) ? 0 : selectedMonth + 1
    const newYear = (isIncrementingYear) ? selectedYear + 1 : selectedYear
    navigateCalendar(newYear, newMonth)
  }

  const decrementMonth = function (e) {
    e.preventDefault()
    // if we're on december, we want to increment the year and reset the month to Jan
    const isDecrementingYear = selectedMonth === 0
    const newMonth = (isDecrementingYear) ? 11 : selectedMonth - 1
    const newYear = (isDecrementingYear) ? selectedYear - 1 : selectedYear
    navigateCalendar(newYear, newMonth)
  }

  return (
    <div>
      <Row>
        <Col className="calendar_nav--month" xs={12} sm={6} md={4} mdOffset={2} lg={3} lgOffset={3}>
          <FormGroup
            controlId="monthSelect"
          >
            <ControlLabel className="sr-only">Month</ControlLabel>
            <FormControl
              placeholder="select"
              componentClass="select"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              <option value="select" disabled>select</option>
              {availableMonths.map((monthName, monthIndex) => (
                <option key={`MonthOption${monthIndex}`} value={monthIndex}>{monthName}</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col className="calendar_nav--year" xs={12} sm={6} md={4} lg={3}>
          <FormGroup
            controlId="yearSelect"
          >
            <ControlLabel className="sr-only">Year</ControlLabel>
            <FormControl
              placeholder="year"
              type="number"
              value={selectedYear}
              onChange={handleYearChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="calendar_nav--prev" xs={12} sm={6}>
          <a href="#" onClick={decrementMonth}>Prev</a>
        </Col>
        <Col className="calendar_nav--next" xs={12} sm={6}>
          <a href="#" onClick={incrementMonth}>Next</a>
        </Col>
      </Row>
    </div>
  )
}

export default CalendarMonth
