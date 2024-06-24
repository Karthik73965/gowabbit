import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {}

export default function Contact({ }: Props) {
  return (
    <main className="py-[10vh]">
      <div className="flex justify-between">
        <span>{""}</span>
      <IoArrowForwardSharp className="left md:mr-10" size={90} />
      </div>
      <section className="md:px-10 px-4 ">
        <h1 className="flex text-5xl justify-between align-middle font-thin">READY TO GET STARTED ? <span className="-mt-5">      {""}
        </span></h1>
      </section>
      <section className="border-y-[1px] md:flex  mt-4 border-[#0D1011]">
        <div className="border-r-[1px] border-[#0D1011] md:w-[65vw] h-[400px]">
          <div className="h-[135px] border-b-[1px] md:px-10 px-4 flex align-middle justify- py-10 border-[#0D1011]" >
            <label className="text-xl ">Name :&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" className="md:w-[50vw] border-2   h-[30px] rounded-md px-2 ml-4 outline-none mt-1" />
          </div>
          <div className="h-[135px] border-b-[1px] md:px-10 px-4 flex align-middle justify- py-10 border-[#0D1011]" >
            <label className="text-xl ">Phone number: </label>
            <input type="text" className="w-[48vw] border-2   h-[30px] rounded-md px-2 ml-4 outline-none mt-1" />
          </div>
          <div className="h-[135px] md:px-10 px-4 flex align-middle justify- py-10" >
            <label className="text-xl ">Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" className="w-[50vw] border-2   h-[30px] rounded-md px-2 ml-4 outline-none mt-1" />
          </div>

        </div>
        <div>
          <div className="md:px-10 px-4 py-10">
            <label className="text-xl ">service you need : </label> <br />
            <textarea className="md:w-[30vw] w-[80vw] border-2   h-[300px] rounded-md px-2 ml-4 outline-none mt-1" />
          </div>
        </div>
      </section>
      <section className="flex justify-center align-middle">
        <div className=" text-xl pt-4 btn ">
        < span className="border-2 flex gap-x-2 w-[180px]  bg-white hover:bg-black hover:text-white ease-in-out duration-300 border-black rounded-full py-1 px-2">
            Send Request <MdOutlineArrowOutward className="m-1 ml-0 arrrow ease-in" />

          </span>
        </div>
      </section>
    </main>
  )
}