import { BsFillRecordFill } from "react-icons/bs";
import { CiDark, CiLight } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoAngular } from "react-icons/io";
import { FaVuejs, FaReact } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";

function App() {


  return (
    <>
      <div className="flex w-screen justify-center items-center px-36 py-16 h-screen ">
        <div className="bg-white w-full border-black/30 border-1 rounded-4xl h-[calc(100vh-7.5rem)] shadow-[0_20px_40px_0_rgba(0,0,0,0.25)]">


          <div className="flex pl-4 pt-4 pb-2">

            <div className="flex-2/10 w-full rounded-4xl shadow-[0_0px_20px_0_rgba(0,0,0,0.25)] p-2">
              <div className="flex text-3xl">
                <BsFillRecordFill className="text-[#FF605C]" />
                <BsFillRecordFill className="text-[#FFBD44]" />
                <BsFillRecordFill className="text-[#00CA4E]" />
              </div>
              <div className=" text-xl">
                <h2 className="pl-2 font-semibold text-gray-500">Jerry Rivera</h2>
                <ul className=" pt-3 text-[1.2rem] flex flex-col gap-2">
                  <li className="flex items-center gap-2 p-1">
                    <IoSearch />
                    <input type="text" className="rounded-xl w-40 bg-gray-100 py-1 px-3 text-sm" />
                  </li>
                  <li>
                    <a href="https://portafolio-jet-kappa.vercel.app/"
                      target="_black"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 transition-all duration-700 hover:bg-blue-50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <VscFileSubmodule />
                      Portafolio
                    </a>
                  </li>
                </ul>
                <h3 className="pl-2 text-sm pt-4 font-semibold text-gray-400">Favourites</h3>
                <h3 className="pl-2 text-sm pt-4 font-semibold text-gray-400">Locations</h3>
                <ul>
                  <li>
                    <a href="https://portafolio-jet-kappa.vercel.app/"
                      target="_black"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 transition-all duration-700 hover:bg-blue-50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <VscFileSubmodule />
                      Portafolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex-8/10 justify-between items-center">
              <header className="flex justify-between border-b-1 border-black/30 px-4">
                <div className="pb-4" >
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
                {/*CONTENIDO*/}
                <div className="flex-8/10 bg-amber-200 ">
                  <h2>CONTENIDO</h2>
                </div>
              </div>
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
