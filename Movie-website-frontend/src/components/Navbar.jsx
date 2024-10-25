import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory , MdOutlineSubscriptions } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { HiDownload } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { GoStopwatch } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { CgPlayListSearch } from "react-icons/cg";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="p-4  text-white"> 
      <div className="flex justify-between items-center">
        <div className='flex items-center'>
            {/* Sidebar Start  */}
        <div className="">
      <div
        className={`fixed top-0 left-0 h-full w-64  p-7 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button className="absolute top-4 right-4 text-white text-xl" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <h2 className=" text-blue-400 text-2xl font-bold mb-6">Website</h2>
        <ul className="text-white space-y-4">
        
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><IoHomeOutline size={26} />Home</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><BiSolidMoviePlay size={26} />Movies</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><MdOutlineSubscriptions size={26} />Subscription</li>
        </ul>
        <hr className='mt-5' />
        <h1 className='flex items-center gap-4 mt-5'>You <LiaGreaterThanSolid /></h1>

        <ul className="text-white space-y-4 mt-3">
        
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><MdHistory size={26} />History</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><CgPlayListSearch size={26} />Playlists</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><RxVideo size={26} />Your Videos</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><GoStopwatch size={26} />Watch Later</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><AiOutlineLike size={26} />Liked videos</li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2 text-[20px] font-bold"><HiDownload size={26} />Download</li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <button className="text-white text-xl    bg-blue-500 p-2 rounded-md" onClick={toggleSidebar}><FaBars /></button>
      </div>
    </div>
    {/* End */}
            <h1 className="text-2xl font-bold">Website</h1>
        </div>

        <ul className="hidden md:flex gap-16 text-[19px]">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Movies</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:block">
          <button type="submit" className="bg-blue-400 px-7 py-2 rounded-md hover:bg-blue-500 transition">
            Login
          </button>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} className="cursor-pointer" />
          ) : (
            <FaBars size={24} className="cursor-pointer" />
          )}
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden  p-4 rounded-lg">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Movies</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          <button type="submit" className="bg-blue-400 px-7 py-2 rounded-md hover:bg-blue-500 transition mt-2">
            Login
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
