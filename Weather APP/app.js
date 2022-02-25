//get location with IP API

const getLocation = async () => {
  const url =
    "http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone";

  const response = await fetch(url);
  const data = response.json();

  return data;
};

//get weather with API

const getWeather = async () => {
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=85508982b261a226da56087d2849b940`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
