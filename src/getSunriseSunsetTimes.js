const getSunriseSunsetTimes = async ({ latitude, longitude }) => {
  const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}=today`;
  const response = await fetch(apiUrl);
  const jsonData = await response.json();

  return validate(jsonData);
};

const validate = (data) => {
  const { results, status } = data;

  if (status === "INVALID_REQUEST") {
    return {
      error: "Latitude or longitude parameters are missing or invalid.",
    };
  }

  if (status === "UNKNOWN_ERROR") {
    return {
      error:
        "Request could not be processed due to a server error. The request may succeed if you try again in several minutes.",
    };
  }

  const hasTimes =
    results.hasOwnProperty("sunrise") && results.hasOwnProperty("sunset");

  if (hasTimes && status === "OK") {
    const { sunrise, sunset } = results;
    return { sunrise, sunset };
  }

  return {
    error:
      "Request could not be processed due to a server error. The request may succeed if you try again in several minutes or modify your input.",
  };
};

export default getSunriseSunsetTimes;
