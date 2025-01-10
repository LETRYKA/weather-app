import './App.css';
import logo from './imgs/logo.png';
import sun from './imgs/sun.webp'

function App() {
  return (
    <div className="main-container relative overflow-hidden">
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="w-[140px] h-[140px] bg-[#F3F4F6] flex justify-center items-center border border-opacity-25 rounded-[50%] absolute z-20"><img src={logo} alt="Pinecone Academy logo" className="h-[65px]" /></div>
        <div className="w-[340px] h-[340px] border opacity-20 rounded-[50%] absolute"></div>
        <div className="w-[540px] h-[540px] border opacity-20 rounded-[50%] absolute"></div>
        <div className="w-[940px] h-[940px] border opacity-20 rounded-[50%] absolute"></div>
        <div className="w-[1340px] h-[1340px] border opacity-20 rounded-[50%] absolute"></div>
        <div className="w-[1740px] h-[1740px] border opacity-20 rounded-[50%] absolute"></div>
      </div>
      <div className="weather-container flex content-between z-10">
        <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6] z-10">
          <div className="w-[414px] h-[832px] flex justify-center rounded-3xl isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
            <div className="w-4/5 flex items-center flex-col mt-12">
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-lg text-[#9CA3AF]">January 10, 2025</p>
                  <h1 className="text-5xl text-[#111827] font-semibold">Ulaanbaatar</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-gray-600"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <img src={sun} alt="sun" className="w-[274px] h-[274px] mt-16"/>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-[#0F141E]">
          dsa
        </div>
      </div>
    </div>
  );
}
export default App;
