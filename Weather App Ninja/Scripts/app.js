//selectors
const cityForm = document.querySelector("form");

//form input event
cityForm.addEventListener("submit", (e) => {
  //prevent default actions
  e.preventDefault();

  //get form input value
  const city = cityForm.city.value.trim();

  //reset input
  cityForm.reset();

  //update the ui with new city
  updateCity(city);
});
