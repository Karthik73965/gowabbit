import  { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';
type Props = {}

export default function Blogs({ }: Props) {
    const[image , setimage] = useState<number>(0)
    const HandelLeft = ()=>{
        setimage(image -1 )
        console.log(image)
    }
    const HandelRight = ()=>{
        setimage(image + 1  )
        console.log(image)

    }
    return (
        <main className='pt-[70px] overflow-hidden -z-10 flex'>
            <section className='w-[65vw] text-white s bg-black'>
                <section className='text-[8vh] px-[10vw] font-medium '>
                    {/*---------------------------------------------------- main -----------------------*/}
                   <section  className=' overflow-hidden  overflow-x-hidden   h-[70vh]'>
                   <div className='border-l-2 border-white'>
                        &nbsp;
                    </div>
                    {/* first text */}
                   <div className={` top-animation  ${image>1 ? "hidden" :"block"}  ${image==1 ? "pt-[60vh]" :"p-0"}`}>
                   <span >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                    </span>
                   <p className=' text-sm my-5'>Des vues à couper le souffle dans la citadelle perdue des Incas : Explorez l'histoire mystérieuse et la beauté naturelle du Machu Picchu, un site incontournable pour des photographies épiques au cœur des montagnes andines du Pérou.</p>
                   </div>
                      {/* second text */}
                      <div className={` top-animation ${image ==1 ? "-mt-[120vh] ":""}  ${image>2 ? "hidden" :"block"}   ${image==2 ? "pt-[100vh]" :"p-0"}`}>
                   <span >
                   second ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                    </span> 
                   <p className=' text-sm my-5'>Des vues à couper le souffle dans la citadelle perdue des Incas : Explorez l'histoire mystérieuse et la beauté naturelle du Machu Picchu, un site incontournable pour des photographies épiques au cœur des montagnes andines du Pérou.</p>
                   </div>
                      {/* Thrid text */}
                      <div className={` top-animation  ${image ==2 ? "-mt-[160vh] ":""}  ${image>3 ? "hidden" :"block"}  ${image==3 ? "pt-[100vh]" :"p-0"}`}>
                   <span >
                   Thrid ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                    </span> 
                   <p className=' text-sm my-5'>Des vues à couper le souffle dans la citadelle perdue des Incas : Explorez l'histoire mystérieuse et la beauté naturelle du Machu Picchu, un site incontournable pour des photographies épiques au cœur des montagnes andines du Pérou.</p>
                   </div>
                      {/* Fourth text */}
                      <div className={` top-animation  ${image ==3 ? "-mt-[160vh] ":""} ${image>4 ? "hidden" :"block"}  ${image==4 ? "pt-[100vh]" :"p-0"}`}>
                   <span >
                   Fourth ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                    </span> 
                   <p className=' text-sm my-5'>Des vues à couper le souffle dans la citadelle perdue des Incas : Explorez l'histoire mystérieuse et la beauté naturelle du Machu Picchu, un site incontournable pour des photographies épiques au cœur des montagnes andines du Pérou.</p>
                   </div>
                   </section>
                   {/*---------------------------------------------------- main ------------------------ */}
                    <div className='flex text-xl gap-x-4  mt-10  ml-[38vw]'>
                        <button className='bg-gray-600 p-2 px-3 rounded-full' onClick={HandelLeft}><FaArrowLeft /></button>
                        <button className='bg-gray-600 p-2 px-3 rounded-full' onClick={HandelRight}><FaArrowRight/></button>
                        <div className='flex w-20 gap-x-3 mt-4 ml-10 text-gray-300'>
                            <span>{image+1}</span>  - <span>04</span>
                        </div>
                    </div>
                    
                    <div className='border-l-2 border-white'>
                        &nbsp;
                    </div>
                </section>
            </section>
            <section className='bg-green-200 pt-[15vh] flex w-[35vw]'>
                    <section>
                    <div className={`bg-gray-700 rounded-xl z-[1] scale-50 md:scale-100 w-[500px] ${image >1 ?"hidden" :"block"}  ${image== 1 ? "-ml-[140vw] md:-ml-[90vw]" :"-ml-[40vw] md:-ml-[10vw]"}  smooth-animation  h-[400px] border-gray-500 border-2`}>
                    </div>
                    </section>
                    <section>
                    <div className={`bg-yellow-700 rounded-xl z-[1] scale-50 md:scale-100 w-[500px]  ${image >2 ?"hidden" :"block"}  ${image== 2 ? "-ml-[140vw] md:-ml-[90vw]" :"-ml-[40vw] md:-ml-[10vw]"}   smooth-animation h-[400px] border-gray-500 border-2`}>
                    </div>
                    </section>
                    <section>
                    <div className={`bg-blue-700 rounded-xl z-[1] scale-50 md:scale-100 w-[500px]  ${image >3 ?"hidden" :"block"}  ${image== 3 ? "-ml-[140vw] md:-ml-[90vw]" :"-ml-[40vw] md:-ml-[10vw]"}  smooth-animation  h-[400px] border-gray-500 border-2`}>
                    </div>
                    </section>
                    <section>
                    <div className={`bg-green-700 rounded-xl z-[1] w-[500px] scale-50 md:scale-100     ${image >4 ?"hidden" :"block"} ${image== 4 ? "-ml-[140vw] md:-ml-[90vw]" :"-ml-[40vw] md:-ml-[10vw]"}  smooth-animation  h-[400px] border-gray-500 border-2`}>
                    </div>
                    </section>
                   
                  
            </section>
        </main>
    )
}