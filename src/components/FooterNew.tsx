import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";



const FooterNew = ({ }) => {
    return (
        <div className=" h-[300px] grid md:flex justify-around my-10 ">
            <section>
                <div className="md:text-[10vh] text-3xl text-center font-bold">Ready when you are</div>
              <ul>
              <li className="mt-10 text-3xl font-semibold w-[300px] "> • Home</li>
                <li className="text-3xl font-semibold w-[300px] "> • Techinical Services</li>
                <li className="text-3xl font-semibold w-[300px] "> • Brand Services</li>
                <li className="text-3xl font-semibold w-[300px] "> • Media Services</li>
                <li className="text-3xl font-semibold w-[300px] " > • About</li>
                <li className="text-3xl font-semibold w-[300px] "> • Blogs</li>
                <li className="text-3xl font-semibold w-[300px] "> • Contact Us </li>
              </ul>
            </section>
            <section>
                <div className="md:text-[7vh] text-3xl text-center mb-10 mt-20 font-bold ">Connect With Us</div>
                <div className="social-icons flex ">
                    <div className="social-icon" title="Follow us on Facebook">
                        <FaFacebookF size={100} />
                    </div>
                    <div className="mt-20">
                        <SiLinkedin size={60}/>
                    </div>
                    <div>
                        <RiInstagramFill size={60}/>
                    </div>
                    <div className="social-icon mt-20" title="Follow us on YouTube">
                        <FaYoutube  size={60}/>
                    </div>
                    <div>
                        <FaSquareTwitter size={60}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterNew;
