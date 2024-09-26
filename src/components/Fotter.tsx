import { SiTwitter } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

type Props = {}

export default function Fotter({}: Props) {
  return (
    <footer className='gap-y-10 grid md:flex align-middle px-[10vw] pt-[10vh] pb-[10vh] md:pb-[0vh] justify-around bg-yellow-400 md:h-[400px]'>
      <div className='text-5xl text-[#6D6D6D]'>LOGO</div>
      <div className=' text-[#6D6D6D] text-xl '>
        <h6 >Visit</h6>
        <p className='text-2xl' >Home</p>
        <p className='text-2xl' >Our Work</p>
        <p className='text-2xl' >Get in Touch</p>
        <p className='text-2xl' >WHo we are</p>
        <div className='flex gap-x-3 -ml-3 md:mt-6'><p>Data policy</p> <p>Imprints</p></div>
      </div>
      <div className='pt-5'>
        <h6 className=' text-[#6D6D6D] text-xl '>Newsletter</h6>
        <h6 className=' text-[#6D6D6D] text-xl '>Podcast</h6>
        <h6 className=' text-[#6D6D6D] text-xl '>Press</h6>
        <div className='flex gap-x-3 mt-6 text-xl text-[#6D6D6D]'>
            <SiTwitter/>
            <FaSquareInstagram/>
            <FaLinkedin/>
        </div>
      </div>
    </footer>
  )
}