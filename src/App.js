import './App.css';
import logo from './imgs/logo.png';
import sun from './imgs/sun.webp'
import sunShadow from './imgs/shadow.png'
import home from './imgs/Home.png'
import pin from './imgs/Pin.svg'
import heart from './imgs/Heart.svg'
import user from './imgs/User.svg'

function App() {
  return (
    <div className="main-container relative overflow-hidden">
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="w-[140px] h-[140px] bg-[#F3F4F6] flex justify-center items-center border border-opacity-25 rounded-[50%] absolute z-20"><img src={logo} alt="Pinecone Academy logo" className="h-[65px]" /></div>
        <div className="w-[340px] h-[340px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[540px] h-[540px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[940px] h-[940px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1340px] h-[1340px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1740px] h-[1740px] border border-[#FFFFFF] border-opacity-10 rounded-[50%] absolute"></div>
      </div>
      {/* Main Container */}
      <div className="weather-container flex content-betwee">
        {/* Left Side Container */}
        <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6]">
          {/* Card */}
          <div className="w-[414px] h-[832px] flex flex-col items-center rounded-[42px] z-50 bg-white/20 backdrop-blur bg-opacity-20 shadow-lg">
          <div className='absolute w-[128px] h-[128px] rounded-full bg-gradient-to-r from-[#ff9429] via-[#feac31] to-[#ff9429] left-32 z-0'></div>
            {/* Card Header */}
            <div className="w-4/5 flex items-center flex-col mt-12">
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-lg text-[#9CA3AF]">January 10, 2025</p>
                  <h1 className="text-5xl text-[#111827] font-extrabold">Ulaanbaatar</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-600"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <img src={sun} alt="sun" className="relative w-[274px] h-[274px] mt-16 z-10" />
              <img src={sunShadow} alt="sun" className="absolute mt-36 w-[274px] h-[274px] mt-16 z-0" />
            </div>
            {/* Car Footer */}
            <div className='flex text-start flex-col w-4/5'>
              <h1 className='text-[144px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent'>26°</h1>
              <p className='text-2xl font-extrabold text-[#FF8E27] -mt-6'>Bright</p>
            </div>
            <div className='flex justify-center gap-[60px] flex-row w-4/5 m-10 cursor-pointer'>
              <img src={home} alt="home-i" className="h-[37px]" />
              <img src={pin} alt="home-i" className="h-[37px]" />
              <img src={heart} alt="home-i" className="h-[37px]" />
              <img src={user} alt="home-i" className="h-[37px]" />
            </div>
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
