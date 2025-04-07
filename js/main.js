let searchInput = document.getElementById("searchInput");
let currentDate = new Date();
let tommorowDate = new Date(currentDate);
let afterTommorowDate = new Date(currentDate);

let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//   ================ Current Day ================
let currentDayOfWeek = document.getElementById("currentDayOfWeek");
let currentDayAndMonth = document.getElementById("currentDayAndMonth");
let currenCity = document.getElementById("currenCity");
let currentTempC = document.getElementById("currentTempC");
let currentIcon = document.getElementById("currentIcon");
let currenText = document.getElementById("currenText");
let humidity = document.getElementById("humidity");
let wind_kph = document.getElementById("wind_kph");
let wind_dir = document.getElementById("wind_dir");
//   ================ Current Day ================

//   ================ Tommorow ====================
let tommorowDayOfWeek = document.getElementById("tommorowDayOfWeek");
let tommorowDayAndMonth = document.getElementById("tommorowDayAndMonth");
let tommorowIcon = document.getElementById("tommorowIcon");
let tommorowTempC = document.getElementById("tommorowTempC");
let tommorowMintempC = document.getElementById("tommorowMintempC");
let tommorowText = document.getElementById("tommorowText");
//   ================ Tommorow ====================

//   ================ After Tommorow ====================
let afterTommorowDayOfWeek = document.getElementById("afterTommorowDayOfWeek");
let afterTommorowDayAndMonth = document.getElementById(
  "afterTommorowDayAndMonth"
);
let afterTommorowIcon = document.getElementById("afterTommorowIcon");
let afterTommorowTempC = document.getElementById("afterTommorowTempC");
let afterTommorowMintempC = document.getElementById("afterTommorowMintempC");
let afterTommorowText = document.getElementById("afterTommorowText");
//   ================ After Tommorow ====================

async function getWeather(cityName) {
  try {
    let data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=74b6067799894143a5b64413252102&q=${cityName}&days=3&aqi=no&alerts=no`
    );

    let pureData = await data.json();
    display(pureData);

  
  } catch (error) {
    //   ================ Current Day ================
    currenCity.innerHTML = "Data Error";
    currentTempC.innerHTML = "";
    currentIcon.innerHTML = "";
    currenText.innerHTML = "";
    humidity.innerHTML = "";
    wind_kph.innerHTML = "";
    wind_dir.innerHTML = "";
    //   ================ Current Day ===================

    //   ================ Tommorow ======================
    tommorowIcon.innerHTML = "";
    tommorowTempC.innerHTML = "";
    tommorowMintempC.innerHTML = "";
    tommorowText.innerHTML = "";
    //   ================ Tommorow ======================

    // ================ After Tommorow ====================

    afterTommorowIcon.innerHTML = "";
    afterTommorowTempC.innerHTML = "";
    afterTommorowMintempC.innerHTML = "";
    afterTommorowText.innerHTML = "";

    //   ================ After Tommorow ====================
  }
}

searchInput.addEventListener("input", function () {
  if (this.value.length > 3) {
    getWeather(this.value);
  }
});
getWeather("Cairo");



//=================== Date //=================== 
currentDayOfWeek.innerHTML=DaysOfWeek[currentDate.getDay()]
currentDayAndMonth.innerHTML=`${currentDate.getDate()} ${monthsOfYear[currentDate.getMonth()]}`

tommorowDate.setDate(currentDate.getDate()+1)
afterTommorowDate.setDate(currentDate.getDate()+2)

tommorowDayOfWeek.innerHTML=DaysOfWeek[tommorowDate.getDay()]
tommorowDayAndMonth.innerHTML=`${tommorowDate.getDate()} ${(monthsOfYear[tommorowDate.getMonth()])}`

afterTommorowDayOfWeek.innerHTML=DaysOfWeek[afterTommorowDate.getDay()]
afterTommorowDayAndMonth.innerHTML=`${afterTommorowDate.getDate()} ${(monthsOfYear[afterTommorowDate.getMonth()])}`
//=================== Date //=================== 



function display(weatherData) {
  //   ================ Current Day ================
  currenCity.innerHTML = weatherData.location.name;
  currentTempC.innerHTML = `${weatherData.current.temp_c}<sup>o</sup>C`;
  currentIcon.innerHTML = `<img width="90" src="https:${weatherData.current.condition.icon}">`;
  currenText.innerHTML = weatherData.current.condition.text;
  humidity.innerHTML = `${weatherData.current.humidity} %`;
  wind_kph.innerHTML = `${weatherData.current.wind_kph} km/h`;
  wind_dir.innerHTML = weatherData.current.wind_dir;
  //   ================ Current Day ===================

  //   ================ Tommorow ======================
  tommorowIcon.innerHTML = `<img width="70" src="https:${weatherData.forecast.forecastday[1].day.condition.icon}">`;
  tommorowTempC.innerHTML = `${weatherData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`;
  tommorowMintempC.innerHTML = `${weatherData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C`;
  tommorowText.innerHTML =
    weatherData.forecast.forecastday[1].day.condition.text;
  //   ================ Tommorow ======================

  // ================ After Tommorow ====================

  afterTommorowIcon.innerHTML = `<img width="70" src="https:${weatherData.forecast.forecastday[2].day.condition.icon}">`;
  afterTommorowTempC.innerHTML = `${weatherData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`;
  afterTommorowMintempC.innerHTML = `${weatherData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C`;
  afterTommorowText.innerHTML =
    weatherData.forecast.forecastday[2].day.condition.text;

  //   ================ After Tommorow ====================
}




// let current =new Date("2025-03-31")

// current.setDate(0)

// // console.log(current.getDate());
// console.log(current.getMonth());

