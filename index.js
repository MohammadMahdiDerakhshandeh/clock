let time = document.getElementsByClassName("time")[0];
let date = document.getElementsByClassName("date")[0];

setInterval(update, 1000);

function update() {
  let today = new Date();
  seconds = today.getSeconds();
  minutes = today.getMinutes();
  hours = today.getHours();
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  } else if (hours < 10) {
    hours = "0" + hours;
  }
  let timeString = `${hours}:${minutes}:${seconds}`;
  time.innerHTML = convetToPersianNumber(timeString);

  weekday = today.toLocaleDateString("fa-IR", { weekday: "long" });
  day = today.toLocaleDateString("fa-IR", { day: "numeric" });
  year = today.toLocaleDateString("fa-IR", { year: "numeric" });
  month = today.toLocaleDateString("fa-IR", { month: "long" });
  let dateString = `${weekday}،${day}${month}${year}`;
  date.innerHTML = convetToPersianNumber(dateString);
}
function convetToPersianNumber(input) {
  const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0 && input[i] <= 9) {
      output += persianNumber[input[i]];
    } else if (input[i] == " ") {
      output += "s";
    } else {
      output += input[i];
    }
  }
  return output;
}
