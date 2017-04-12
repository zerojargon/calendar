import React from 'react'
import Month from './calendar.month'
import Navigation from './calendar.navigation'

const Calendar = (props) => (
  <div>
    <Navigation
      currentDate={props.currentMonth}
      handleNavigation={props.handleNavigation}
    />
    <Month currentDate={props.currentMonth} />
  </div>
)

Calendar.propTypes = {
  currentMonth: React.PropTypes.instanceOf(Date).isRequired,
  handleNavigation: React.PropTypes.func.isRequired
}

export default Calendar
