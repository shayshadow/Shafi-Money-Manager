// top bar

//clock

function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // removing military time
  if (hour > 12) {
    hour -= 12;
  }

  const timeString = `${hour} : ${minutes}`;

  document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 6000);