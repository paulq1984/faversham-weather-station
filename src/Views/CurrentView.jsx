const CurrentView = ({ currentWeather }) => {
    return (
        <>
            <h1>{currentWeather.currentWeather.name}</h1>
            <h3>{currentWeather.currentWeather.conditionCode}</h3>
            <h3>{currentWeather.currentWeather.temperature}</h3>
        </>
    )
}

export default CurrentView