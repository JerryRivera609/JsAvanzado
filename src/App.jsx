import { BsFillRecordFill } from "react-icons/bs";
import { CiDark, CiLight } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoAngular } from "react-icons/io";
import { FaVuejs, FaReact } from "react-icons/fa";

function App() {


  return (
    <>
      <div className="grid grid-cols-1 px-36 py-16 ">
        <div className="bg-white border-black/30 border-1 rounded-4xl h-[calc(100vh-8rem)] shadow-[0_20px_40px_0_rgba(0,0,0,0.25)]">
          <header className="border-black/30 border-b-1 flex justify-between p-4 items-center">
            <div className="flex text-3xl">
            <BsFillRecordFill className="text-[#FF605C]" />
            <BsFillRecordFill className="text-[#FFBD44]" />
            <BsFillRecordFill className="text-[#00CA4E]" />
            </div>
            <div>
              <h1 className="text-2xl">Java Script Avanzado</h1>
              <div className="flex justify-center text-xl gap-1">
                <RiJavascriptFill className="text-[#F7DF1E] transition-all duration-500 hover:scale-155" />
                <BiLogoTypescript className="text-[#3178C6] transition-all duration-500 hover:scale-155" />
                <IoLogoAngular className="text-[#DD0031] transition-all duration-500 hover:scale-155" />
                <FaReact className="text-[#61DAFB] rotate-180 animate-spin-slow transition-all duration-500 hover:scale-[1.3]" />
                <FaVuejs className="text-[#42B883] transition-all duration-500 hover:scale-155" />
              </div>
            </div>
            <div>
              <div className="bg-black/20 p-1 rounded-md gap-1 flex">
                <button className="bg-white p-2 rounded-md flex items-center gap-1">
                  <CiLight className="text-xl" />
                  Light
                </button>
                <button className="bg-white p-2 rounded-md flex items-center gap-1">
                  <CiDark className="text-xl" />
                  Dark
                </button>
              </div>
            </div>
          </header>

          <div className="flex h-[calc(100vh-15.4rem)] p-4 gap-4 ">
            {/*LISTA LATERAL*/}
            <div className="flex-2/10 w-full rounded-xl shadow-[0_0px_20px_0_rgba(0,0,0,0.25)] p-2">
            <h2>LISTA</h2>
            </div>
            {/*CONTENIDO*/}
            <div className="flex-8/10 bg-amber-200 ">
            <h2>CONTENIDO</h2>
            </div>
          </div>

          <footer className="bg-fuchsia-100 rounded-b-4xl text-black/60 flex justify-center p-1">
            <h2>
              2 items, 476,32 GB available
            </h2>
          </footer>

        </div>
        
      </div>
      
    </>
  )
}

export default App
