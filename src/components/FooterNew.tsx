import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";

const FooterNew = ({}) => {
  return (
    <footer className="bg-[#0D1011] text-white px-[20vw] md:px-0 grid md:justify-between md:flex p-6 ">
      <section className="text-center md:text-balance md:pl-10">
        <div className="md:flex  justify-between gap-x-20">
          <div>
            <div className="text-[38px] ">About</div>
            <div className="text-[26px] mt-2">Services</div>
            <div className="text-[26px]">Privacy Policy</div>
          </div>
          <div>
            <div className="text-[38px] ">Resources</div>
            <div className="text-[26px] mt-2">Blogs</div>
            <div className="text-[26px]">Terms and Conditions</div>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="outline-none my-5 w-[270px] p-3 text-black"
            placeholder="Stay Updated"
          />
          <button className="text-white border-[4px] border-white ml-10  py-2 px-10 text-xl">
            Subscribe{" "}
          </button>
        </div>
      </section>
      <center className="p-6 w-[40%] ">
        <center className="text-center text-balance  -mt-5 text-5xl">Let's Connect</center>
        <center className="md:flex gap-x-5 mt-14 ml-10">
          <FaFacebookF size={80} />
          <RiInstagramFill size={80} />
          <SiLinkedin size={80} />
          <FaSquareTwitter size={80} />
        </center>
      </center>
    </footer>
  );
};

export default FooterNew;
