import "./Form.css";

const Form = ({ handleSubmit }) => {
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
          placeholder="Latitude"
          required="required"
          type="text"
        />
        <label className="fieldLabel">Latitude</label>
      </div>
      <div className="field">
        <input
          autoComplete="off"
          className="fieldInput"
          name="longitude"
          placeholder="Longitude"
          required="required"
          type="text"
        />
        <label className="fieldLabel">Longitude</label>
      </div>
      <button type="submit" className="primary">
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
