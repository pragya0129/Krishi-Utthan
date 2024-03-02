import React from "react";
import Wind from "../../public/Images/wind.gif";
import Humidity from "../../public/Images/humidity.gif";
import Clouds from "../../public/Images/clouds.gif";
import YellowHighlight from "../components/common/YellowHighlight";

const WeatherInfo = () => {
  const API_KEY = "168771779c71f3d64106d8a88376808a";
  async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    // API call
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      if (!data.sys) {
        throw data;
      }
    } catch (err) {
      console.log("Error aaya hai");
    }
  }

  return (
    <div className="bg-white text-black flex flex-col gap-7 justify-center items-center">
      {/* Heading */}
      <div className="text-[6rem] h-34">
        <YellowHighlight text={"Weather"} />
      </div>

      {/* Location  */}
      <div className="text-[1.5rem] font-bold">Jawahar Nagar</div>

      {/* TEmprature */}
      <div className="text-[2rem] mb-7">22.87° C</div>

      {/* Info */}
      <div className="flex gap-x-32 items-center justify-between mb-14">
        {/* Wind  */}
        <div className="flex flex-col justify-center items-center">
          <img src={Wind} height={12} width={122} />
          <p className="font-semibold">WindSpeed</p>
          <p>7.72 M/s</p>
        </div>

        {/* Humidity */}
        <div className="flex flex-col justify-center items-center">
          <img src={Humidity} height={12} width={100} className="mb-6" />
          <p className="font-semibold">Humidity</p>
          <p>68%</p>
        </div>
        {/* Clouds */}
        <div className="flex flex-col justify-center items-center">
          <img src={Clouds} height={12} width={112} className="mb-5" />
          <p className="font-semibold">Clouds</p>
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
