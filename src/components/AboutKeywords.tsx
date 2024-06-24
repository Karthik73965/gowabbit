import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AbouKeywords({}) {
  const [mousepostion, setmousepostion] = useState<any>({
    x: 0,
    y: 0
  })
  const [cusrsorState , setcursorSate] = useState<string>("default")
  console.log(mousepostion)
  const variants:any= {
    default :{
      x:mousepostion.x -16,
      y :mousepostion.y -16,
      backgroundColor :"transparent"     
    },
    text :{
      height:150 , 
      width:150,
      x:mousepostion.x -60,
      y :mousepostion.y -60,
      mixBlendMode :"difference",
      backgroundColor :"#39e75f"
    }
  }
  useEffect(() => {
    const mousemove = (e:any) => {
      setmousepostion({
        x: e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener("mousemove", mousemove)
    return () => {
      window.removeEventListener("mousemove", mousemove)
    }
  }, [])
  const textEnter =()=>{
    setcursorSate("text")
  } 
  const textLeave =()=>{
    setcursorSate("default")
  }
  return (
    <>
    <main onMouseEnter={textEnter} onMouseLeave={textLeave}  className="pt-20 px-0 bg-[#0D1011] flex justify-around text-white ">
    <motion.div className=" cursor bg-black h-32 w-32 rounded-full fixed top-0 left-0 pointer-events-none"  animate={cusrsorState} variants={variants}/>

  <section>
  <center className="w-[18vw] border-[3px] pt-[2vh] rotate-12 text-xl mr-0 border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw]  border-[3px] pt-[2vh] rotate-[-12deg] m-10 ml-0 mr-0 mt-20 text-xl border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw] border-[3px] pt-[2vh] rotate-[10deg] m-10 mt-20 mr-0 text-xl ml-0 border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
  </section>
  {/* top -1  */}
  <section className="mt-28">
  
    <center className="w-[18vw]  border-[3px] pt-[2vh] rotate-0 -mb-6  ml-20 mr-0  text-xl border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
   <div className="flex">
   <center className="w-[18vw] border-[3px] pt-[2vh] -mb-8 -rotate-6 mt-10 mr-0 text-xl  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw] border-[3px] pt-[2vh] -mb-8 rotate-6 mt-10 mr-0 text-xl  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
   </div>
   <div className="flex">
   <center className="w-[18vw] border-[3px] pt-[2vh] mt-10  ml-20  m-10 text-xl mr-0  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw] border-[3px] pt-[2vh] mt-10 -ml-0 m-10 text-xl mr-0  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
   </div>
 
  </section>
  {/* top-2  */}
  <section>
  <center className="w-[18vw] border-[3px] pt-[2vh] rotate-12 text-xl  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw]  border-[3px] pt-[2vh] rotate-[-12deg] m-10 ml-0 mt-20 text-xl border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw] border-[3px] pt-[2vh] rotate-[10deg] m-10 mt-20 text-xl ml-0 border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
  </section>
  <section>
  <center className="w-[18vw] border-[3px] pt-[2vh] rotate-12 text-xl  border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw]  border-[3px] pt-[2vh] rotate-[-12deg] m-10 ml-0 mt-20 text-xl border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
    <center className="w-[18vw] border-[3px] pt-[2vh] rotate-[10deg] m-10 mt-20 text-xl ml-0 border-white text-white h-[9vh] rounded-full">
      <span className="font-bold" >Keywords</span>
    </center>
  </section>
    </main>
    </>
  )
}