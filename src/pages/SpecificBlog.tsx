import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
export  function SpecificBlog({ }) {
  const [mousepostion, setmousepostion] = useState<any>({
    x: 0,
    y: 0
  })
  const [cusrsorState , setcursorSate] = useState<string>("default")
  const variants :any = {
    default :{
      x:mousepostion.x -16,
      y :mousepostion.y -16,
      backgroundColor :"transparent"     
    },
    text :{
      height:300 , 
      width:300,
      x:mousepostion.x -60,
      y :mousepostion.y -60,
      mixBlendMode :"difference",
      backgroundColor :"#1e1e1e"
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
    <main className='pt-[20vh]  min-h-screen overflow-hidden grid md:flex px-4 md:px-10 justify-around'>

      <section className='md:w-[65vw]'>
        <h1 className='text-[#0D1011] font-bold text-5xl md:text-[8vh] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </h1>
        {/* <div className='h-[50vw] w-[50vw] mt-[13vw] ml-[5vw] -mb-[1000px] bg-[#0D1011] text-whtie text-popover -z-10 text-white rounded-full'>
            &nbsp;
        </div> */}
        <motion.div className=" cursor bg-black h-32 w-32 rounded-full fixed top-0 left-0 pointer-events-none"  animate={cusrsorState} variants={variants}/>
        {/* text */}
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className='md:text-3xl text-2xl tracking-widest font-thin text-outline z-10 text-blacks	 my-10'>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>

      </section>
      <section className='md:w-[35vw] '>
        <div className="h-[500px] w-[400px] md:ml-[7vw] bg-black">
          &nbsp;
        </div>
      </section>
    </main>
  )
}