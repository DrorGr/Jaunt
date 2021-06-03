import DatePicker from 'react-datepicker'

export function SelectDates({setDates, startDate, endDate}) {
  return (
    <section className="select-dates-container">
      <DatePicker
        minDate={new Date()}
        onChange={dates => setDates(dates)}
        monthsShown={2}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </section>
  )
}

