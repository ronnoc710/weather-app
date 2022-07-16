import "./current-weather.css"

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Detroit</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature"> 70*F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">70*F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">2m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">60%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">10 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;