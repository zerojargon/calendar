// Taken almost completely from react-day-picker
// https://github.com/gpbl/react-day-picker/blob/master/src/Helpers.js#L105

export function getDayNames () {
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
}

export function getMonthNames () {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}

export function getFirstDayOfWeek () {
  // returning 1 here, but this could easily be configurable
  return 1
}

export function getFirstDayOfMonth (d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12)
}

export function getDaysInMonth (d) {
  const resultDate = getFirstDayOfMonth(d)

  resultDate.setMonth(resultDate.getMonth() + 1)
  resultDate.setDate(resultDate.getDate() - 1)

  return resultDate.getDate()
}

export function getWeekArray (d, firstDayOfWeek = getFirstDayOfWeek()) {
  const daysInMonth = getDaysInMonth(d)
  const dayArray = []

  let week = []
  const weekArray = []

  for (let i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12))
  }

  dayArray.forEach((day) => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week)
      week = []
    }
    week.push(day)
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week)
    }
  })

  // unshift days to start the first week
  const firstWeek = weekArray[0]
  for (let i = 7 - firstWeek.length; i > 0; i -= 1) {
    const outsideDate = clone(firstWeek[0])
    outsideDate.setDate(firstWeek[0].getDate() - 1)
    firstWeek.unshift(outsideDate)
  }

  // push days until the end of the last week
  const lastWeek = weekArray[weekArray.length - 1]
  for (let i = lastWeek.length; i < 7; i += 1) {
    const outsideDate = clone(lastWeek[lastWeek.length - 1])
    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1)
    lastWeek.push(outsideDate)
  }

  return weekArray
}

export function getSelectedMonth (year, month) {
  let selectedMonthDate
  if (year) {
    selectedMonthDate = Date.UTC(year, 1)
    if (month > 0) {
      selectedMonthDate = Date.UTC(year, (month - 1))
    }
    return (selectedMonthDate) ? new Date(selectedMonthDate) : null
  }
  return new Date()
}

export function clone (d) {
  return new Date(d.getTime())
}
