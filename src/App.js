import './App.css';
import logo from './imgs/logo.png';
import sunShadow from './imgs/shadow.png'

// Forecast img imports
import sun from './imgs/sun.webp'
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


import { cityfilter } from './utils/CityFilter';

import { useEffect, useState } from "react";


function App() {

  const [countrySearch, setCountrySearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('')

  const apiKey = "7a84f98ac9416e88fbb1c66f9eda70e3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  console.log("api", apiKey)
  console.log("url", url)

  const cityAdd = (city) => {
    setCity(city);
    setCountrySearch("");
  };

  const handleSearch = (event) => {
    setCountrySearch(event.target.value)
  };

  const fetchData = async () => {
    setIsLoading(true)
    await fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const countriesAndCities = cityfilter(result.data);
        console.log(countriesAndCities)
        setCities(countriesAndCities)
        setFilteredData(result.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  const dataFilter = () => {
    setFilteredData(
      cities.filter((data) =>
        data.city.toLowerCase().startsWith(countrySearch.toLowerCase())
      ).slice(0, 5)
    )
  }

  useEffect(() => {
    console.log("Use effect")
    fetchData()
  }, [])

  useEffect(() => {
    dataFilter()
  }, [countrySearch])

  const Weather = (() => {
  })


  return (
    <div className="main-container relative overflow-hidden">
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
      {/* Main Container */}
      <div className="weather-container flex content-between">
        {/* Search Bar */}
        <div className='absolute z-50 w-screen h-screen flex justify-center mt-[40px]'>
          <div>
            <div className="w-[567px] h-auto bg-white flex row gap-4 justify-center items-center p-4 rounded-[48px]">
              <div className="w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><g opacity="0.2"><path d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z" fill="black" /></g>
                </svg>
              </div>
              <input type="search" id="search" value="read" name="search" placeholder={isLoading ? "Loading" : "Search"} onChange={handleSearch} className="h-[44px] w-full text-3xl font-bold outline-none"></input>
            </div>
            {countrySearch &&
              <div className='mt-[10px] pt-4 pb-4 bg-[#ffffff33] backdrop-blur-2xl shadow-lg rounded-[24px]'>
                {!isLoading && countrySearch.length > 0 &&
                  filteredData.map((country, index) => {
                    console.log(country)
                    return <div className='w-full h-[50px] flex items-center self-stretch gap-[16px] cursor-pointer ml-[24px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-500"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <p className='text-2xl font-bold' onClick={() => cityAdd(country.city)} key={index}>{country.city}, {country.country}</p>
                    </div>
                  })}
                {cities < 0 && <div>This is isLoading ...</div>}
              </div>}
          </div>
        </div>
        {/* SB END */}
        {/* Left Side Container */}
        <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6]">
          <div className="flex relative justify-center items-center">
            {/* Card */}
            <div className="w-[414px] h-[832px] flex flex-col items-center rounded-[42px] z-10 bg-white/20 backdrop-blur-[10px] bg-opacity-20 shadow-lg">
              {/* Card Header f */}
              <div className="w-4/5 flex items-center flex-col mt-12">
                <div className="flex w-full justify-between">
                  <div>
                    <p className="text-lg text-[#9CA3AF]">January 10, 2025</p>
                    <h1 className="text-5xl text-[#111827] font-extrabold">Ulaanbaatar</h1>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-600"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <img src={sun} alt="sun" className="relative w-[274px] h-[274px] mt-16 z-10" />
                <img src={sunShadow} alt="sun" className="absolute mt-36 w-[274px] h-[274px] z-0" />
              </div>
              {/* Car Footer */}
              <div className='flex text-start flex-col w-4/5'>
                <h1 className='text-[144px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent'>26°</h1>
                <p className='text-2xl font-extrabold text-[#FF8E27] -mt-6'>Bright</p>
              </div>
              <div className='flex justify-center gap-[60px] flex-row w-4/5 m-10 cursor-pointer'>
              </div>
            </div>
            <div className='absolute w-[160px] h-[160px] rounded-full bg-gradient-to-r from-[#ff9429] via-[#feac31] to-[#ff9429] -ml-[400px] -mt-[60px] top-0 z-0'></div>
          </div>
        </div>

        {/* Right Container */}
        <div className="w-full h-screen bg-[#0F141E]">
          dsa
        </div>
      </div>
    </div>
  );
}
export default App;
