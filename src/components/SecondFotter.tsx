import { MdOutlineArrowOutward } from "react-icons/md"
import './Navbar.css'
type Props = {}

export default function SecondFotter({}: Props) {
  return (
    <center className='bg-[#0D1011] h-[100vh] text-white w-[100vw] py-[30vh]'>
            <span className=' border-b-2 border-white text-6xl font-thin'>READY TO GET STARTED ?</span>
            <div className='h-[100px]  pt-[6px] w-[100px] mt-10 border-dashed border-2 rounded-full'>
                <div className='bg-white rounded-full pt-7 btn hover:bg-black hover:-rotate-90 ease-in-out duration-300  hover:text-white h-[85px] w-[85px] text-black'>
                <MdOutlineArrowOutward size={25}/>
                </div>
            </div>
    </center>
  )
}