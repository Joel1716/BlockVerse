import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js";
const timer = document.querySelector(".js-time");
const dateLibrary = dayjs();
const currentTime = dateLibrary.format("H:mm");
timer.innerHTML = currentTime;
