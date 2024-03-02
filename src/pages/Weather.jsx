// // import React from "react";
import Wind from "../../public/Images/wind.gif";
import Humidity from "../../public/Images/humidity.gif";
import Clouds from "../../public/Images/clouds.gif";
import YellowHighlight from "../components/common/YellowHighlight";

// const WeatherInfo = () => {
//   const API_KEY = "168771779c71f3d64106d8a88376808a";
//   async function fetchUserWeatherInfo(coordinates) {
//     const { lat, lon } = coordinates;
//     // API call
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();
//       console.log(data);
//       if (!data.sys) {
//         throw data;
//       }
//     } catch (err) {
//       console.log("Error aaya hai");
//     }
//   }

//   return (
//
//   );
// };

import { useState, useEffect } from "react";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user's geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const apiKey = "168771779c71f3d64106d8a88376808a";
              const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
              const locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
              const weatherResponse = await fetch(weatherApiUrl);
              if (!weatherResponse.ok) {
                throw new Error("Failed to fetch weather data");
              }
              const weatherData = await weatherResponse.json();

              const locationResponse = await fetch(locationApiUrl);
              if (!locationResponse.ok) {
                throw new Error("Failed to fetch location data");
              }
              const locationData = await locationResponse.json();

              setWeatherData(weatherData);
              setLocation(locationData.name + ", " + locationData.sys.country);
            },
            (error) => {
              setErrorMessage(
                "Please allow location access to see the weather"
              );
            }
          );
        } else {
          setErrorMessage("Geolocation is not supported by your browser");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="weather-app">
    //   {errorMessage && <div className="error-message">{errorMessage}</div>}
    //   {weatherData && (
    //     <div className="weather-info">
    //       <h2>Weather Information</h2>
    //       <p>Temperature: {weatherData.main.temp}°C</p>
    //       <p>Humidity: {weatherData.main.humidity}%</p>
    //       <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    //       <p>Cloudiness: {weatherData.clouds.all}%</p>
    //     </div>
    //   )}
    // </div>
    <div className="weatherApp">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {weatherData && location && (
        <div className="bg-white text-black flex flex-col gap-7 justify-center items-center">
          <div className="text-[6rem] h-34">
            <YellowHighlight text={"Weather"} />
          </div>

          <div className="text-[1.5rem] font-bold">{location}</div>

          <div className="text-[2rem] mb-7">{weatherData.main.temp}°C</div>

          <div className="flex gap-x-32 items-center justify-between mb-14">
            {/* Wind  */}
            <div className="flex flex-col justify-center items-center">
              <img src={Wind} height={12} width={122} />
              <p className="font-semibold">WindSpeed</p>
              <p>{weatherData.wind.speed} m/s</p>
            </div>

            {/* Humidity */}
            <div className="flex flex-col justify-center items-center">
              <img src={Humidity} height={12} width={100} className="mb-6" />
              <p className="font-semibold">Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            {/* Clouds */}
            <div className="flex flex-col justify-center items-center">
              <img src={Clouds} height={12} width={112} className="mb-5" />
              <p className="font-semibold">Clouds</p>
              <p>{weatherData.clouds.all}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;

// export default WeatherInfo;
