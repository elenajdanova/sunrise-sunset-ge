import "./Form.css";

const Form = ({ handleSubmit, setState, state }) => {
  const { inputs } = state;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      inputs: { ...state.inputs, [name]: value.trim() },
    });
  };

  return (
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
      <button type="submit">
        Add location
      </button>
      <p className="description note">
        *Note that negative latitudes represent the southern hemisphere, and
        negative longitudes represent the western hemisphere.
      </p>
    </form>
  );
};

export default Form;
