import { useState } from "react";

import './App.css';
import getSunriseSunsetTimes from './getSunriseSunsetTimes.js';
import Form from "./components/Form.jsx";

const App = () => {
  const [coordinates, setCoordinates] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const latitude = { [target[1].name]: target[1].value };
    const longitude = { [target[0].name]: target[0].value };

    const times = await getSunriseSunsetTimes({ ...latitude, ...longitude });
    updateState({ ...latitude, ...longitude, ...times });
  };

  const updateState = (newCoordinates) => {
    setCoordinates([...coordinates, newCoordinates]);
  };

  return (
    <div className="app">
      <header className="header">
        Get your sunrise coffee and sunset view wherever you are!
      </header>
      <Form handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
