import { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";


export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 lg:bg-transparent bg-white">
      <div className="container mx-auto lg:w-full w-[95%]">
        <div className="flex items-center justify-between border-b border-[#e8e3da] lg:w-4/5 w-full mx-auto py-8">
          <img src="/logo.png" alt="" width={42} />
          <span className="text-slate-400 text-4xl font-bold md:text-5xl">psychastroai</span>
          <span className="flex items-center gap-8">
            {dropDown ? (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <MdClose />
              </div>
            ) : (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <HiMenuAlt3 />
              </div>
            )}
        
            <button className="lg:block hidden bg-[#C2A74E] text-white text-[10px] font-semibold px-[29px] py-[11px] transition-bg hover:bg-black hover:text-white">
            Sign Up Now
            </button>
            
          </span>
          
        </div>
        
        <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center pt-8">
          
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden ">
            <a
              href="#"
              className="leading-normal bg-zinc-300 no-underline text-sm hover:text-white hover:bg-black rounded py-2 px-4"
            >
             Features 
            </a>
            <a
              href="#"
              className="leading-normal bg-zinc-300 no-underline text-sm hover:text-main hover:text-white hover:bg-black rounded py-2 px-4"
            >
              Pricing 
            </a>
            <a
              href="#"
              className="leading-normal bg-zinc-300 no-underline text-sm hover:text-main hover:text-white hover:bg-black rounded py-2 px-4"
            >
              FAQ 
            </a>
            <a
              href="#"
              className="leading-normal bg-zinc-300 no-underline text-sm hover:text-main hover:text-white hover:bg-black rounded py-2 px-4"
            >
              Login 
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main  bg-[#C2A74E] hover:text-white hover:bg-black rounded py-2 px-4"
            >
              Get Started
            </a>
           
          </ul>
        </div>
        {dropDown && (
          <div className="lg:hidden w-full h-full px-6 fixed top-24 bg-white transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                 Features 
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Pricing 
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  FAQ 
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Login 
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex  bg-[#C2A74E] items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Get Started
                </a>
              
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
