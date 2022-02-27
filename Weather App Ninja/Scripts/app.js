//selectors
const cityForm = document.querySelector("form");

//update next city => function

const updateCity = async (city) => {
  const cityDetail = await getCity(city);
  const weather = await getWeather(cityDetail.Key);

  return {
    cityDetail: cityDetail,
    weather: weather,
  };
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
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
