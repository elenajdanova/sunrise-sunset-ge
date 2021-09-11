import "./Output.css";
import SunriseIcon from "../assets/sunrise.svg";
import SunsetIcon from "../assets/sunset.svg";

const Output = ({ locations }) => {
  return (
    <div className="container">
      {locations.map(({ longitude, latitude, sunrise, sunset }, idx) => (
        <div className="card" key={idx}>
          <div className="descriptionContainer">
            <div>
              <div>Longitude</div>
              <div className="numbers">{longitude}</div>
            </div>
            <div>
              <div>Latitude</div>
              <div className="numbers">{latitude}</div>
            </div>
          </div>
          <div>
            <div className="timeContainer">
              <img
                src={SunriseIcon}
                className="icon"
                alt="Sunrise Icon"
                width="38px"
                height="38px"
              />
              <div className="time">
                <div>Sunrise</div>
                <div className="numbers">{sunrise}</div>
              </div>
            </div>
            <div className="timeContainer">
              <img
                src={SunsetIcon}
                className="icon"
                alt="Sunrise Icon"
                width="38px"
                height="38px"
              />
              <div className="time">
                <div>Sunset</div>
                <div className="numbers">{sunset}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Output;
