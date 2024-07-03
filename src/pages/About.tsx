import AboutKeywords from "@/components/AboutKeywords"
type Props = {}

export default function About({}: Props) {
  return (
   <>
   <main className="pt-20 bg-[#0D1011] text-white ">
    <section className="px-[10vw] pt-[5vw]">
    <div className="text-xl mt-10 md:mt-0">
        ABOUT US 
    </div>
    <div className="border-[1px] opacity-55 border-white w-[30px]"></div>
    <h1 className="xl:text-[13vh] text-[8vh]">WE ARE A DIGITAL </h1>
    <h2 className="xl:text-[13vh] md:-mt-10 text-[6vh] text-[#6D6D6D]">PRODUCTION TEAM </h2>
    <p className="font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sapiente cupiditate sed assumenda optio, saepe ratione deleniti, possimus consequatur distinctio maxime unde, veniam molestias dolores voluptatibus? Laboriosam, aliquam, quaerat odio non dolorem quisquam nostrum dolor rerum tempore optio iusto sunt? Aliquam doloremque voluptatem error harum nihil autem dolores quisquam id pariatur cum voluptate quos quam magni recusandae, ad debitis illo ullam? Odio, sit dolores minus architecto sint reprehenderit ratione repellendus dolore voluptas consequuntur?</p>
    <h1 className="xl:text-[10vh] mt-[20vh]">KEYWORDS </h1>
    <div className="border-[1px] opacity-55 border-white w-[150px] "></div>
    </section>
    <AboutKeywords/>
   </main>
   {/* <ThirdFotter/> */}
   </>
  )
}