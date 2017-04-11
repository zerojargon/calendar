import Calendar from '../components/calendar'
import Layout from '../components/layout'
import { getSelectedMonth } from '../helpers/date'

export default (props) => {
  const { year, month } = props.url.query
  const selectedMonth = getSelectedMonth(year, month)

  const handleNavigation = function (newUrl) {
    props.url.push(newUrl)
  }

  if (selectedMonth) {
    return (
      <Layout>
        <Calendar
          currentMonth={selectedMonth}
          handleNavigation={handleNavigation}
        />
      </Layout>
    )
  }
  return (<p>ooops</p>)
}
