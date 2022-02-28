//selectors
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const cityName = document.querySelector(".details h5");
const weCon = document.querySelector(".we-con");
const tempSpan = document.querySelector(".temp");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

//update ui => function
const updateUi = (data) => {
  //   const cityDets = data.cityDetail;
  //   const weather = data.weather;

  const { cityDets, weather } = data;

  //display data
  cityName.textContent = cityDets.EnglishName;
  weCon.textContent = weather.WeatherText;
  tempSpan.textContent = weather.Temperature.Metric.Value;
  console.log(data);

  //display day and night images

  if (weather.IsDayTime === true) {
    time.src = "images/day.png";
  } else {
    time.src = "images/night.jpeg";
  }
  if (card.classList.contains("d-none")) {
    //remove d-none class from a card
    card.classList.remove("d-none");
  }
};
//update next city => function
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather }; //object shorthand notation
};

//form input event
cityForm.addEventListener("submit", (e) => {
  //prevent default actions
  e.preventDefault();

  //get form input value
  const city = cityForm.city.value.trim();

  //reset input
  cityForm.reset();

  //update the ui with new city
  updateCity(city)
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
});
