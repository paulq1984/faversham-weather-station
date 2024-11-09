const DailyView = ({ forecastDaily }) => {
    return (
        <>
        {forecastDaily.forecastDaily.days.map((day) => (
            <h2 key={day.forecastStart}>{day.forecastStart}</h2>
        ))}
        </>
    )
}

export default DailyView