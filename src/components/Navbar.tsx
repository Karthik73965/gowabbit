import { MdOutlineArrowOutward } from "react-icons/md";

import { GoPlus } from "react-icons/go";
import NavBg from '../../public/NavBg.png'
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
type Props = {}

export default function Navbar({ }: Props) {
    const [show, setshow] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isservices, setisserviceces] = useState(false);

    return (
        <header className=" fixed z-50 mb-10 flex justify-between px-10 -mb-[10vw] pb-3 md:bg-transparent bg-[#0D1011] text-white md:text-black  md:bg-white w-[100vw]  ">
            <div className="font-bold text-2xl pt-4 pl-3">
                LOGO
            </div>
            <div style={{
                backgroundImage: `url(${NavBg})`
            }} className="w-[915px] hidden md:block h-[70px] ml-10 text-white">
                <ul className="flex justify-around gap-x-24 text-lg  pt-5 px-20">
                    <li>HOME</li>
                    <li className="flex gap-x-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() =>{
                            setIsDropdownOpen(false)
                         }}>Resources <GoPlus className="m-1 mt-[6px]" />
                        {isDropdownOpen && (
                            <div  className="absolute grid mt-8 duration-300  transition p-10 border-[1px] border-t-0 border-white bg-[#0D1011]  w-[800px] -ml-[210px] sm:py-2s shadow-lg rounded-xl fade-in">
                                <Link to={'/blogs'}>
                                <div className='sm:m-3 gap-y-10 '>
                                    <div className='flex   justify-between'>
                                        <div className='ml-4' > BLOGS  </div>
                                        <div className="w-5  mt-[6px] h-5 bg-white rounded-full">&nbsp;</div>
                                    </div>
                                </div>
                                </Link>
                                <div className='sm:m-3 '>
                                    <div className='flex justify-between  '>
                                        <div className='ml-4' > BOT  </div>
                                        <div className="w-5  mt-[6px] h-5 bg-white rounded-full">&nbsp;</div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </li>

                    <li  onMouseEnter={() => setisserviceces(true)} onMouseLeave={() =>{
                      
                            setisserviceces(false)
                         }}  className="flex gap-x-2">Services <GoPlus className="m-1 mt-[6px]" /> 
                    {isservices && (
                            <div  className="absolute grid mt-8 duration-300  transition p-10 border-[1px] border-t-0 border-white bg-[#0D1011]  w-[800px] -ml-[470px] sm:py-2s shadow-lg rounded-xl fade-in">
                               <Link to={'/technologyServices'}>
                               <div className='sm:m-3 gap-y-10 '>
                                    <div className='flex   justify-between'>
                                        <div className='ml-4' > TECHNICAL SERVICES  </div>
                                        <div className="w-5  mt-[6px] h-5 bg-white rounded-full">&nbsp;</div>
                                    </div>
                                </div>
                               </Link>
                               <Link to={'/mediaServices'}>
                                <div className='sm:m-3 '>
                                    <div className='flex justify-between  '>
                                        <div className='ml-4' > MEDIA SERVICES   </div>
                                        <div className="w-5  mt-[6px] h-5 bg-white rounded-full">&nbsp;</div>
                                    </div>
                                </div>
                                </Link>
                                <Link to={'/brandServices'}>
                                <div className='sm:m-3 '>
                                    <div className='flex justify-between  '>
                                        <div className='ml-4' > BRAND SERVICES   </div>
                                        <div className="w-5  mt-[6px] h-5 bg-white rounded-full">&nbsp;</div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>About us </li>
                </ul>
            </div>
            <div className=" text-xl pt-4 btn ">
                < span className="border-2  gap-x-2 w-[155px] hidden md:flex bg-white hover:bg-black hover:text-white ease-in-out duration-300 border-black rounded-full py-1 px-2">
                    Get Started  <MdOutlineArrowOutward className="m-1 ml-0 arrrow ease-in" />
                </span>
            </div>
            <span onClick={() => setshow(true)} className='text-3xl pt-4 md:hidden cursor-pointer'><VscMenu /></span>
            <div className={`${show ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 text-blackx w-full h-full flex flex-col items-center justify-start space-y-6 pt-20 text-xl z-50 bg-white  overflow-y-hidden transition-transform ease-in-out duration-300`}>
                <div onClick={() => setshow(false)} className="absolute text-gray-600 cursor-pointer top-8 right-12">
                    <AiOutlineClose size={30} />
                </div>
                <div className='cursor-pointer' >Events</div>
                <div className='cursor-pointer' >Events</div>
                <div className='cursor-pointer' >Events</div>
                <div className='cursor-pointer' >Events</div>

            </div>


        </header>

    )
}