import './App.css';
import React from 'react';
import logo from './imgs/logo.png';
import Card from './components/Card';               // Component Card Day
import CardNight from './components/CardNight'      // Component Card Night

// UseAnimation Import
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';
import alertCircle from 'react-useanimations/lib/alertCircle';

// Forecast img imports
import sun from './imgs/sun.webp'
import sunShadow from './imgs/shadow.png'
import moonShadow from './imgs/moonshadow.png'
import cloud from './imgs/Clouds.png'
import wind from './imgs/Wind.png'
import rain from './imgs/Rain.png'
import snow from './imgs/Snow.png'
import lightning from './imgs/Lightning.png'

// Night
import moon from './imgs/moon.webp'
import nCloud from './imgs/nClouds.png'
import nWind from './imgs/nWind.png'
import nRain from './imgs/nRain.png'
import nSnow from './imgs/nSnow.png'
import nLightning from './imgs/nLightning.png'

// Small Icons
import clear_icon from './imgs/Icons/clear.png'
import cloud_icon from './imgs/Icons/cloud.png'
import drizzle_icon from './imgs/Icons/drizzle.png'
import rain_icon from './imgs/Icons/rain.png'
import snow_icon from './imgs/Icons/snow.png'


import { cityfilter } from './utils/CityFilter';
import { useEffect, useState } from "react";


function App() {

  const [weatherIconNight, setWeatherIconNight] = useState(); // Weather Icon Night
  const [countrySearch, setCountrySearch] = useState("");     // Search value
  const [filteredData, setFilteredData] = useState([]);       // City Data Filter
  const [errorMessage, setErrorMessage] = useState('');       // Error Message
  const [isLoading, setIsLoading] = useState(false);          // Loading State
  const [weatherIcon, setWeatherIcon] = useState();           // Weather Icon Day
  const [city, setCity] = useState('Ulaanbaatar');            // City state default (Ulaanbaatar)
  const [weather, setWeather] = useState({});                 // Weather Data
  const [aqiInfo, setAqiInfo] = useState("");                 // Aqi additional info
  const [cities, setCities] = useState([]);                   // City
  const [aqi, setAqi] = useState({});                         // Aqi data
  const [searchStatus, setSearchStatus] = useState(false)

  const apiKey = '7a84f98ac9416e88fbb1c66f9eda70e3';

  const handleSearch = (event) => {
    setCountrySearch(event.target.value)
  };

  // API Icon data : Icons
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  // Days to short name formatting function
  const dayFormatter = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  // Fetching Country Data
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const result = await response.json();
      setErrorMessage('');
      const countriesAndCities = cityfilter(result.data);
      setCities(countriesAndCities);
      setFilteredData(result.data);
      searchEmpty(filteredData);
    } catch (error) {
      console.log(error);
      setErrorMessage('There is an error while fetching countries data');
    } finally {
    }
  };

  const searchEmpty = (filteredData) => {
    if (filteredData.length === 0) {
      setSearchStatus(true)
    } else {
      setSearchStatus(false)
    }
  };

  // Filtering Country Data
  const dataFilter = () => {
    setFilteredData(
      cities.filter((data) =>
        data.city.toLowerCase().startsWith(countrySearch.toLowerCase())
      ).slice(0, 5)
    )
  }

  // Fetching Weather Data
  const fetchWeather = async (city) => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}`
      );
      const result = await response.json();

      console.log(result);
      setWeather({
        location: result.city.name,
        tempDay: Math.floor(result.list[0].main.temp_max),
        tempNight: Math.floor(result.list[0].main.temp_min),
        desc: result.list[0].weather[0].description,
        icon: {
          day2: allIcons[result.list[10].weather[0].icon],
          day3: allIcons[result.list[15].weather[0].icon],
          day4: allIcons[result.list[23].weather[0].icon],
          day5: allIcons[result.list[31].weather[0].icon],
        },
        date: {
          day2: dayFormatter(result.list[10].dt_txt),
          day3: dayFormatter(result.list[15].dt_txt),
          day4: dayFormatter(result.list[23].dt_txt),
          day5: dayFormatter(result.list[31].dt_txt),
        },
        tempDay2: Math.floor(result.list[10].main.temp),
        tempDay3: Math.floor(result.list[15].main.temp),
        tempDay4: Math.floor(result.list[23].main.temp),
        tempDay5: Math.floor(result.list[31].main.temp),
      });
      iconHandler(result);
    } catch (error) {
      console.log(error);
      setErrorMessage('There is an error while fetching weather data');
    } finally {
      setIsLoading(false);
    }
  };

  // Show icons equal to weather status
  const iconHandler = (result) => {
    if (result && result.list && result.list[0] && result.list[0].weather && result.list[0].weather[0]) {
      const weatherDescription = result.list[0].weather[0].description;

      if (weatherDescription === "clear sky") {
        setWeatherIcon(sun);
        setWeatherIconNight(moon);
      }
      if (weatherDescription === "few clouds") {
        setWeatherIcon(cloud);
        setWeatherIconNight(nCloud);
      }
      if (weatherDescription === "overcast clouds") {
        setWeatherIcon(cloud);
        setWeatherIconNight(nCloud);
      }
      if (weatherDescription === "scattered clouds") {
        setWeatherIcon(cloud);
        setWeatherIconNight(nCloud);
      }
      if (weatherDescription === "broken clouds") {
        setWeatherIcon(cloud);
        setWeatherIconNight(nCloud);
      }
      if (weatherDescription === "shower rain") {
        setWeatherIcon(rain);
        setWeatherIconNight(nRain);
      }
      if (weatherDescription === "rain") {
        setWeatherIcon(rain);
        setWeatherIconNight(nRain);
      }
      if (weatherDescription === "thunderstorm") {
        setWeatherIcon(lightning);
        setWeatherIconNight(nLightning);
      }
      if (weatherDescription === "snow") {
        setWeatherIcon(snow);
        setWeatherIconNight(nSnow);
      }
      if (weatherDescription === "light snow") {
        setWeatherIcon(snow);
        setWeatherIconNight(nSnow);
      }
      if (weatherDescription === "mist") {
        setWeatherIcon(wind);
        setWeatherIconNight(nWind);
      }
    } else {
      console.log('Error');
    }
  }

  // Fetch Aqi status
  const fetchAqi = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=2b4269596359410ea18150926251501&q=${city}&days=1&aqi=yes&alerts=no`
      );
      const result = await response.json();

      console.log(result);
      const aqi = {
        airQuality: Math.floor(result.current.air_quality.pm2_5),
      };
      setAqi(aqi);
      aqiHandler(aqi);
    } catch (error) {
      console.log(error);
      setErrorMessage('There is an error while fetching AQI data');
    }
  };


  // Aqi Handler
  const aqiHandler = (aqi) => {
    const airQuality = aqi.airQuality
    if (0 < airQuality && airQuality < 50) {
      const aqiObj = {
        desc: 'Good',
        color: '#38bdf8',
        emoji: "😄"
      }
      setAqiInfo(aqiObj)
    }
    if (51 < airQuality && airQuality < 100) {
      const aqiObj = {
        desc: 'Moderate',
        color: '#7bda72',
        emoji: "😌"
      }
      setAqiInfo(aqiObj)
    }
    if (101 < airQuality && airQuality < 150) {
      const aqiObj = {
        desc: 'Unhealthy for Sensetive Groups',
        color: '#f0c42d',
        emoji: "☹️"
      }
      setAqiInfo(aqiObj)
    }
    if (151 < airQuality && airQuality < 200) {
      const aqiObj = {
        desc: 'Unhealthy',
        color: '#fe5051',
        emoji: "😶‍🌫️"
      }
      setAqiInfo(aqiObj)
    }
    if (201 < airQuality && airQuality < 300) {
      const aqiObj = {
        desc: 'Very Unhealthy',
        color: '#960232',
        emoji: "😮‍💨"
      }
      setAqiInfo(aqiObj)
    }
    if (301 < airQuality && airQuality < 999) {
      const aqiObj = {
        desc: 'Hazardous',
        color: '#512771',
        emoji: "💀"
      }
      setAqiInfo(aqiObj)
    }
  };

  // Add City
  const cityAdd = (city) => {
    if (city.includes(" ")) {
      city = city.replace(/ /g, "%20");
    }
    setCity(city);
    setCountrySearch("");
  };

  // Use Effects
  useEffect(() => {
    if (city.length > 0) {
      fetchWeather(city)
    }
    fetchAqi(city)
  }, [city])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dataFilter()
  }, [countrySearch])

  useEffect(() => {
    searchEmpty(filteredData);
  }, [filteredData])

  const shouldDisplayError = errorMessage.length > 0

  return (
    <div className="main-container relative overflow-hidden">
      <div className='blocker absolute w-screen h-screen bg-black z-50 flex hidden flex-row justify-center items-center'>
        <UseAnimations animation={alertCircle} size={30} fillColor='red' strokeColor='red' />
        <p className='text-[15px] font-medium text-[white] ml-[3px]'>Currently this page does not support mobile devices</p>
      </div>
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className='flex flex-col justify-center items-end gap-[92px] pl-[90px] relative'>
          <div className='w-[90px] h-[70px] bg-[#0F141E] ml-[0px] mb-[0px] rounded-bl-[100%] z-30'></div>
          <div className='w-[90px] h-[70px] bg-[#0F141E] ml-[0px] mb-[0px] rounded-tl-[100%] z-30'></div>
          <div className='w-[90px] h-[230px] absolute mr-[50px] bg-[#F3F4F6] ml-[0px] mb-[0px] z-20'></div>
        </div>
        <div className="w-[140px] h-[140px] bg-[#F3F4F6] flex justify-center items-center border border-opacity-25 rounded-[50%] absolute z-20"><img src={logo} alt="Pinecone Academy logo" className="h-[65px]" /></div>
        <div className="w-[340px] h-[340px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[540px] h-[540px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[940px] h-[940px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1340px] h-[1340px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1740px] h-[1740px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
      </div>

      {/* AQI WIDGET */}
      <div className='fixed bottom-10 left-12 bg-[white] py-[10px] px-[20px] rounded-tl-[12px] rounded-tr-[12px] flex justify-center z-40 cursor-pointer shadow-sm'>
        <div className='flex flex-row gap-10 justify-between items-center mb-[5px]'>
          <div className='flex flex-row items-center'>
            <h1 className='text-[40px]'>{aqiInfo.emoji}</h1>
            <div className='flex-row ml-3'>
              <p className='text-[24px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent'>{aqi.airQuality || "-"}</p>
              <p className='text-[14px] text-[#9CA3AF] -mt-[7px]'>{aqiInfo.desc}</p>
            </div>
          </div>
          <div><UseAnimations animation={activity} size={30} fillColor='black' strokeColor='black' /></div>
        </div>
        <div className={`w-full absolute bottom-0 h-[6px] border`} style={{ backgroundColor: aqiInfo.color }}></div>
      </div>
      {/* END */}

      {shouldDisplayError && <div>{errorMessage}</div>}
      {/* Main Container */}
      <div className="weather-container flex content-between">
        {/* Search Bar */}
        <div className='absolute w-screen z-40  flex justify-center mt-[40px]'>
          <div>
            <div className="w-[567px] h-auto bg-white flex row gap-4 justify-center items-center p-4 rounded-[48px]">
              <div className="w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><g opacity="0.2"><path d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z" fill="black" /></g>
                </svg>
              </div>
              <input type="search" id="search" name="search" placeholder={isLoading ? "Loading" : "Search"} value={countrySearch} onChange={handleSearch} className="h-[44px] w-full text-3xl font-bold outline-none"></input>
            </div>
            {countrySearch &&
              <div className='mt-[10px] pt-4 pb-4 bg-[#ffffff33] backdrop-blur-2xl shadow-lg rounded-[24px]'>
                {!isLoading && countrySearch.length > 0 &&
                  filteredData.map((country, index) => {
                    return <div className='w-full h-[50px] flex items-center self-stretch gap-[16px] cursor-pointer ml-[24px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-500"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <p className='text-2xl font-bold transition-all hover:pl-[5px]' onClick={() => cityAdd(country.city)} key={index}>{country.city}, {country.country}</p>
                    </div>
                  })}
                {searchStatus && (
                  <div className='w-full flex justify-center items-center'>
                    <UseAnimations animation={alertCircle} size={30} fillColor='#111827' strokeColor='#111827' />
                    <p className='text-[14px] font-bold text-[#111827] ml-[3px]'>There is no country with that name</p>
                  </div>
                )}
                {cities < 0 && <div>This is isLoading ...</div>}
              </div>}
          </div>
        </div>
        {/* SB END */}
        {/* Left Side Container */}
        <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6]">
          <Card isLoading={isLoading} weather={weather} weatherIcon={weatherIcon} sun={sun} sunShadow={sunShadow} iconHandler={iconHandler} />
        </div>
        {/* Right Container */}
        <div className="w-full h-screen flex justify-center items-center bg-[#0F141E]">
          <CardNight isLoading={isLoading} weather={weather} weatherIcon={weatherIcon} sun={moon} sunShadow={moonShadow} iconHandler={iconHandler} weatherIconNight={weatherIconNight} />
        </div>
      </div>
    </div >
  );
}
export default App;
