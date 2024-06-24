import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { useState } from "react"
  import { MdOutlineArrowOutward } from "react-icons/md"
  
  export default function AccordionDemo() {
    const [click, Setclick] = useState<String>("")
    return (
      <Accordion type="single" collapsible className="w-full mt-[13vw] md:ml-[15vw]  mr-10">
        <AccordionItem className={` border-t border-gray-200 ${click == "website" ? "bg-black text-white" : ""} px-5`} value="item-1">
          <AccordionTrigger onClick={() => Setclick("website")}><span className={`text-3xl py-4  font-thin ${click == "website" ? "bg-black text-white" : ""}`}>Graphic Designing</span></AccordionTrigger>
          <AccordionContent className="pl-10">
           <div className="flex">
           LOREM IPSUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Dui accumsan sit amet nulla facilisi.
           <div className="flex w-[30vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT  <MdOutlineArrowOutward size={20} />
           </div>
           </div>
           <div className="flex gap-x-4 my-5">
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE   
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT 
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT
           </div>
           </div>
  
          </AccordionContent>
        </AccordionItem >
        <AccordionItem className={`${click == "Search" ? "bg-black text-white" : ""} px-5`} value="item-2">
          <AccordionTrigger onClick={() => Setclick("Search")}><span className={`text-3xl py-4  font-thin ${click == "Search" ? "bg-black text-white" : ""}`}>BRAND PROMOTIONS </span></AccordionTrigger>
          <AccordionContent className="pl-10">
           <div className="flex">
           LOREM IPSUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Dui accumsan sit amet nulla facilisi.
           <div className="flex w-[30vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT  <MdOutlineArrowOutward size={20} />
           </div>
           </div>
           <div className="flex gap-x-4 my-5">
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE   
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT 
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT
           </div>
           </div>
  
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={`${click == "2D" ? "bg-black text-white" : ""} px-5`} value="item-3">
        <AccordionTrigger onClick={() => Setclick("2D")}><span className={`text-3xl py-4  font-thin ${click == "2D" ? "bg-black text-white" : ""}`}>INFLUNCER MARKETING</span></AccordionTrigger>     <AccordionContent className="pl-10">
           <div className="flex">
           LOREM IPSUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Dui accumsan sit amet nulla facilisi.
           <div className="flex w-[30vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT  <MdOutlineArrowOutward size={20} />
           </div>
           </div>
           <div className="flex gap-x-4 my-5">
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE   
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT 
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT
           </div>
           </div>
  
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={`${click == "VIDEO" ? "bg-black text-white" : ""} px-5`} value="item-4">
        <AccordionTrigger onClick={() => Setclick("VIDEO")}><span className={`text-3xl py-4  font-thin ${click == "VIDEO" ? "bg-black text-white" : ""}`}>VIDEO EDITING</span></AccordionTrigger>
        <AccordionContent className="pl-10">
           <div className="flex">
           LOREM IPSUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Dui accumsan sit amet nulla facilisi.
           <div className="flex w-[30vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT  <MdOutlineArrowOutward size={20} />
           </div>
           </div>
           <div className="flex gap-x-4 my-5">
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE   
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT 
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT
           </div>
           </div>
  
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={`${click == "STOCK" ? "bg-black text-white" : ""} px-5`} value="item-5">
        <AccordionTrigger onClick={() => Setclick("STOCK")}><span className={`text-3xl py-4  font-thin ${click == "STOCK" ? "bg-black text-white" : ""}`}> USER ACQUISITION </span></AccordionTrigger>
          <AccordionContent className="pl-10">
           <div className="flex">
           LOREM IPSUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Dui accumsan sit amet nulla facilisi.
           <div className="flex w-[30vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT  <MdOutlineArrowOutward size={20} />
           </div>
           </div>
           <div className="flex gap-x-4 my-5">
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE      
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT 
           </div>
           <div className="flex w-[10vw] border-2 border-white gap--2 h-[30px] px-2 py-1 rounded-full">
            CHOOSE PRODUCT
           </div>
           </div>
  
          </AccordionContent>
        </AccordionItem>
  
      </Accordion>
    )
  }
  