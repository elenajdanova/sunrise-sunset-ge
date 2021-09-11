import { useState } from "react";

import './App.css';
import getSunriseSunsetTimes from './getSunriseSunsetTimes.js';
import Form from "./components/Form.jsx";

const App = () => {
  const [state, setState] = useState({
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

  return (
    <div className="app">
      <header className="header">
        Get your sunrise coffee and sunset view wherever you are!
      </header>
      <Form handleSubmit={handleSubmit} setState={setState} state={state}/>
    </div>
  );
}

export default App;
