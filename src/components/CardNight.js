import moment from 'moment';
import UseAnimations from "react-useanimations";
import loading2 from 'react-useanimations/lib/loading2';

// Small Icons
import clear_icon from '../imgs/Icons/clear.png'
import cloud_icon from '../imgs/Icons/cloud.png'
import drizzle_icon from '../imgs/Icons/drizzle.png'
import rain_icon from '../imgs/Icons/rain.png'
import snow_icon from '../imgs/Icons/snow.png'
import wind_icon from '../imgs/Icons/wind.png'

const CardNight = (props) => {
    const { isCardLoading, weather, weatherIcon, sun, sunShadow, iconHandler, weatherIconNight } = props;

    return (
        <div>
            {isCardLoading && (<UseAnimations animation={loading2} size={40} fillColor='#0F141E' strokeColor='#0F141E' />)}
            {
                !isCardLoading && (
                    <div className="flex relative justify-center items-center">
                        {/* Card */}
                        <div className="w-[414px] h-auto flex flex-col items-center rounded-[42px] z-10 bg-[#111827BF] backdrop-blur-[10px] bg-opacity-20 shadow-lg">
                            {/* Card Header f */}
                            <div className="w-4/5 flex items-center flex-col mt-12">
                                <div className="flex w-full justify-between">
                                    <div>
                                        <p className="text-lg text-[#9CA3AF]">{moment().format('MMMM Do YYYY')}</p>
                                        <h1 className="text-5xl text-[#FFFFFF] font-extrabold">{weather.location || 'Undefined'}</h1>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-600"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <img src={weatherIconNight || sun} alt="" className="relative w-[274px] h-[274px] mt-10 z-10" />
                                <img src={sunShadow} alt="sun" className="absolute mt-32 w-[274px] h-[274px] z-0" />
                            </div>
                            {/* Car Footer */}
                            <div className='flex text-start flex-col -mt-[20px] w-4/5'>
                                <h1 className='text-[144px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent'>{weather.tempNight || '0'}°</h1>
                                <p className='text-2xl font-extrabold text-[#777CCE] -mt-6'>
                                    {weather.desc || '-'}</p>
                            </div>
                            <div className="flex justify-between gap-2 w-4/5 mt-6 mb-10 cursor-pointer">
                                <div className='flex justify-center items-center flex-col w-full rounded-[12px] pt-1 pb-2 bg-[#172033]'>
                                    <img src={weather?.icon?.day2 || clear_icon} alt="weather" className='w-[50px]' />
                                    <p className='text-[14px] font-semibold text-[#6B7280] mt-2'>{weather?.date?.day2 || "-"}</p>
                                    <div className='text-[23px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent'>{weather.tempDay2 || '0'}°</div>
                                </div>
                                <div className='flex justify-center items-center flex-col w-full rounded-[12px] pt-1 pb-2 bg-[#172033]'>
                                    <img src={weather?.icon?.day3 || clear_icon} alt="weather" className='w-[50px]' />
                                    <p className='text-[14px] font-semibold text-[#6B7280] mt-2'>{weather?.date?.day3 || "-"}</p>
                                    <div className='text-[23px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent'>{weather.tempDay3 || '0'}°</div>
                                </div>
                                <div className='flex justify-center items-center flex-col w-full rounded-[12px] pt-1 pb-2 bg-[#172033]'>
                                    <img src={weather?.icon?.day4 || clear_icon} alt="weather" className='w-[50px]' />
                                    <p className='text-[14px] font-semibold text-[#6B7280] mt-2'>{weather?.date?.day4 || "-"}</p>
                                    <div className='text-[23px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent'>{weather.tempDay4 || '0'}°</div>
                                </div>
                                <div className='flex justify-center items-center flex-col w-full rounded-[12px] pt-1 pb-2 bg-[#172033]'>
                                    <img src={weather?.icon?.day5 || clear_icon} alt="weather" className='w-[50px]' />
                                    <p className='text-[14px] font-semibold text-[#6B7280] mt-2'>{weather?.date?.day5 || "-"}</p>
                                    <div className='text-[23px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent'>{weather.tempDay5 || '0'}°</div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute w-[160px] h-[160px] rounded-full bg-gradient-to-r from-[#8d92d8] via-[#8d92d8] to-[#6f74ca] -mr-[400px] -mb-[60px] bottom-0 z-0'></div>
                    </div>
                )
            }
        </div>
    )
}


export default CardNight;