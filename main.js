"use strict";
const cardTitles = document.querySelectorAll(".card--title");
const cardCurrent = document.querySelectorAll(".card--current");
const cardData = document.querySelectorAll(".card--data");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const period = [daily, weekly, monthly];

// switch daily/weekly/monthly tabs

function selectDaily() {
  daily.style.color = "hsl(236, 100%, 97%)";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
}

function selectWeekly() {
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "hsl(236, 100%, 97%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
}

function selectMonthly() {
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(236, 100%, 97%)";
}

// fetch json data
let displayDaily = false;
let displayWeekly = true;
let displayMonthly = false;

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    cardTitles.forEach((title, index) => {
      title.innerHTML = data[index].title;
    });

    selectWeekly();
    cardCurrent.forEach((current, index) => {
      current.innerHTML = `${data[index].timeframes.weekly.current}hrs`;
    });
    cardData.forEach((previous, index) => {
      previous.innerHTML = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
    });

    daily.addEventListener("click", () => {
        selectDaily();
        displayDaily = true;
        displayWeekly = false;
        displayMonthly = false;
      cardCurrent.forEach((current, index) => {
        current.innerHTML = `${data[index].timeframes.daily.current}hrs`;
      });
      cardData.forEach((previous, index) => {
        previous.innerHTML = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
      });
    });

    weekly.addEventListener("click", () => {
        selectWeekly();
        displayWeekly = true;
        displayDaily = false;
        displayMonthly = false;
      cardCurrent.forEach((current, index) => {
        current.innerHTML = `${data[index].timeframes.weekly.current}hrs`;
      });
      cardData.forEach((previous, index) => {
        previous.innerHTML = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
      });
    });

    monthly
      .addEventListener("click", () => {
          selectMonthly();
          displayMonthly = true;
          displayDaily = false;
          displayWeekly = false;
        cardCurrent.forEach((current, index) => {
          current.innerHTML = `${data[index].timeframes.monthly.current}hrs`;
        });
        cardData.forEach((previous, index) => {
          previous.innerHTML = `Last Month - ${data[index].timeframes.monthly.previous}hrs`;
        });
      })
      .catch((error) => {
        console.error("Fetching data failed:", error);
      });
  });

period.forEach((time) => {
  time.addEventListener("mouseenter", (e) => {
    if (e.target == daily) {
      daily.style.color = "hsl(236, 100%, 97%)";
    } else if (e.target == weekly) {
        weekly.style.color = "hsl(236, 100%, 97%)";
    } else if (e.target == monthly) {
        monthly.style.color = "hsl(236, 100%, 97%)";
    }
  });
    time.addEventListener('mouseleave', (e) => {
           if (e.target == daily && !displayDaily) {
             daily.style.color = "hsl(235, 45%, 61%)";
           } else if (e.target == weekly && !displayWeekly) {
             weekly.style.color = "hsl(235, 45%, 61%)";
           } else if(e.target == monthly && !displayMonthly) {
             monthly.style.color = "hsl(235, 45%, 61%)";
           } 
    })
});
