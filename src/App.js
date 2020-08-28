import React, { useState } from "react";

const api = {
  key: "67fc83f0c6e888f2985b7bb945e96025",
  url: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(weather);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 65
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search weather..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}</div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="humidity">{weather.weather[0].humidity}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { render } from "@testing-library/react";

// const api = {
//   key: "67fc83f0c6e888f2985b7bb945e96025",
//   url: "http://api.openweathermap.org/data/2.5/",
// };

// function App() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   const search = (event) => {
//     if (event.key === "Enter") {
//       fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setWeather(result);
//           setQuery("");
//         });
//     }
//   };
// }

// const dateBuilder = (d) => {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// };

// return (
//   <div
//     className={
//       typeof weather.main != "undefined"
//         ? weather.main.temp > 65
//           ? "app warm"
//           : "app"
//         : "app"
//     }
//   >
//     <main>
//       <div className="search-box">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search Weather"
//           onChange={(e) => setQuery(e.target.value)}
//           value={query}
//           onKeyPress={search}
//         />
//       </div>
//       {typeof weather.main != "undefined" ? (
//         <div>
//           <div className="location-box">
//             <div className="location">
//               {weather.name}, {weather.sys.country}
//             </div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">{Math.round(weather.main.temp)}F</div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </main>
//   </div>
// );

export default App;
