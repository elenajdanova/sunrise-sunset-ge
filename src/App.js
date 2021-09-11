import { useEffect, useState } from "react";

import "./App.css";
import getSunriseSunsetTimes from "./getSunriseSunsetTimes.js";
import Form from "./components/Form.jsx";
import Output from "./components/Output.jsx";

const MAX_LOCATIONS = 5;

const App = () => {
  const [state, setState] = useState({
    showResults: false,
    locations: [],
    inputs: {
      latitude: "",
      longitude: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const latitude = { [target[1].name]: target[1].value.trim() };
    const longitude = { [target[0].name]: target[0].value.trim() };

    const times = await getSunriseSunsetTimes({ ...latitude, ...longitude });
    updateState({ ...latitude, ...longitude, ...times });
  };

  const updateState = (locationData) => {
    setState({
      ...state,
      locations: [...state.locations, locationData],
      inputs: {
        latitude: "",
        longitude: "",
      },
    });
  };

  useEffect(() => {
    if (state.locations.length === MAX_LOCATIONS && !state.showResults) {
      setState({ ...state, showResults: true });
    }
  }, [state]);

  const { locations, showResults } = state;

  return (
    <div className="app">
      <header className="header">
        Get your sunrise coffee and sunset view wherever you are!
      </header>
      {showResults ? (
        <Output locations={locations} />
      ) : (
        <Form handleSubmit={handleSubmit} setState={setState} state={state} />
      )}
    </div>
  );
};

export default App;
