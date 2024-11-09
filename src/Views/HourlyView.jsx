const HourlyView = ({forecastHourly}) => {
    return (
        <>
        {forecastHourly.forecastHourly.hours.map((hour) => (
            <h2 key={hour.forecastStart}>{hour.forecastStart}</h2>
        ))}
        </>
    )
}

export default HourlyView