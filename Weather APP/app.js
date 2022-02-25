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

//Is it day or night => function

const getDayOrNight = () => {
  let dayOrNight;
  const d = new Date();

  if (d.getHours() >= 6 && d.getHours() <= 19) {
    dayOrNight = "Day";
  } else {
    dayOrNight = "Night";
  }
};

//Witch icon should be displayed = > function => get icons

const getIcons = (weMain) => {
  let icon;
  switch (weMain) {
    case "Thunderstorm":
      icon = `${weMain}.svg`;
      break;
    case "Drizzle":
      icon = `${weMain}.svg`;
      break;
    case "Rain":
      icon = `${weMain}.svg`;
      break;
    case "Snow":
      icon = `${weMain}.svg`;
      break;
    case "Clouds":
      icon = `${weMain}.svg`;
      break;
    case "Atmosphere":
      icon = `${weMain}.png`;
      break;
    case "Clear":
      const dayOrNight = getDayOrNight();
      icon = `${weMain}-${dayOrNight}.svg`;
      break;
  }
  return icon;
};

//get tempreture => function

function getTemp(weTemp) {
  const k = weTemp;
  const f = ((k - 273.15) * 9) / 5 + 32;
  const c = k - 273.15;
  return (temp = {
    kel: Math.floor(k),
    far: Math.floor(f),
    can: Math.floor(c),
  });
}
