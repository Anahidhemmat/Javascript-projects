//get location with IP API

const getLocation = async () => {
  const url =
    "http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone";

  const response = await fetch(url);
  const data = response.json();

  return data;
};

//get weather with API

const getWeather = async (lat, lon) => {
  api = "f0894defae7c5584798f8812232a40c2";

  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

  const response = await fetch(url);
  const data = response.json();

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

// selectors

const locationTimezone = document.querySelector(".timezone");
const icon = document.querySelector(".icon");
const degreeSection = document.querySelector(".degree-section");
const degree = document.querySelector(".degree-section h2");
const unit = document.querySelector(".degree-section span");
const temperatureDescription = document.querySelector(
  ".temperature-description"
);

getLocation()
  .then((locationData) => {
    const timeZone = locationData.timezone;
    locationTimezone.textContent = timeZone;
    console.log(locationData);
    return getWeather(locationData.lat, locationData.lon);
  })
  .then((weatherData) => {
    console.log(weatherData);

    const weatherTemp = weatherData.main.temp;
    const weatherMain = weatherData.weather[0].main;
    const weatherDescription = weatherData.weather[0].description;

    //display icon
    const iconName = getIcons(weatherMain);
    const iconImg = document.createElement("img");
    iconImg.src = `icons/${iconName}`;
    icon.append(iconImg);

    //display unit
    degree.textContent = Math.floor(weatherTemp);
    unit.textContent = "K";

    degreeSection.addEventListener("click", () => {
      if (unit.textContent === "K") {
        degree.textContent = getTemp(weatherTemp).far;
        unit.textContent = "F";
      } else if (unit.textContent === "F") {
        degree.textContent = getTemp(weatherTemp).can;
        unit.textContent = "C";
      } else {
        degree.textContent = getTemp(weatherTemp).kel;
        unit.textContent = "K";
      }
    });

    //display description
    temperatureDescription.textContent = weatherDescription;
  });
