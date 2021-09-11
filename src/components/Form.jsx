import { useState } from "react";

import "./Form.css";

const Form = ({ handleSubmit, setState, state }) => {
  const [animate, setAnimate] = useState(false);
  const { inputs } = state;

  const values = Object.values(inputs);
  const inputIsMissing = values.some((value) => value === "");

  const shouldAnimate = animate ? "fadeAnimation" : "";
  const handleAnimation = () => {
    if (!inputIsMissing) {
      setAnimate(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      inputs: { ...state.inputs, [name]: value.trim() },
    });

    setAnimate(false);
  };

  return (
    <div className={`${shouldAnimate}`}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="description">
          <p>
            Enter coordinates for 5 desired locations to get sunrise and sunset
            times for them.
          </p>
        </div>
        <div className="field">
          <input
            autoFocus
            autoComplete="off"
            className="fieldInput"
            name="latitude"
            onChange={handleInput}
            pattern="-?(\d{1,3})\.?\d*"
            placeholder="Latitude"
            required="required"
            title="Latitude must be a number in decimal degrees format."
            type="text"
            value={inputs.latitude}
          />
          <label className="fieldLabel">Latitude</label>
        </div>
        <div className="field">
          <input
            autoComplete="off"
            className="fieldInput"
            name="longitude"
            onChange={handleInput}
            pattern="-?(\d{1,3})\.?\d*"
            placeholder="Longitude"
            required="required"
            title="Latitude must be a number in decimal degrees format."
            type="text"
            value={inputs.longitude}
          />
          <label className="fieldLabel">Longitude</label>
        </div>
        <button onClick={handleAnimation} type="submit">
          Add location
        </button>
        <p className="description note">
          *Note that negative latitudes represent the southern hemisphere, and
          negative longitudes represent the western hemisphere.
        </p>
      </form>
    </div>
  );
};

export default Form;
