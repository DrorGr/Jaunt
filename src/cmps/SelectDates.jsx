import DatePicker from 'react-datepicker'

export function SelectDates({startDate, endDate, setDates}) {
  return (
    <section className="select-dates-container">
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={date => setDates(date)}
        monthsShown={2}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </section>
  )
}

