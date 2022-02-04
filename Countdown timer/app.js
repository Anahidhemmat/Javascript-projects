//selectors
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");
const birthday = "30 mar 2022";

function coundDown() {
  const myBirthdayDate = new Date(birthday);
  //console.log(myBirthdayDate);
  const currentDate = new Date();
  //console.log(currentDate);
  const totalSeconds = (myBirthdayDate - currentDate) / 1000;
  //console.log(totalSeconds);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minsEl.innerText = formatTime(minutes);
  secondsEl.innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//initial call
coundDown();
setInterval(coundDown, 1000);
