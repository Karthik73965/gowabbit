type Props = {}

export default function MediaHeroLeft({}: Props) {
  return (
    <>
    <main className="flex ml-[3vw] ">
    <section className="md:w-[8vw] w-[30vw] mt-[55vh]">
                <section className="grid -rotate-90">
                    <div className="">
                        <div className="font-bold  text-5xl  ">
                            MEDIA
                        </div>
                    </div>
                </section>
                <div className="h-[200px] text-xl mt-14 ml-[1vw]  bg-black rounded-full hover:bg-white border-2 border-black  "> &nbsp;  </div>
            </section>
            <section className="w-[8vw] mt-[35vh] -ml-10">
            <section className="grid -rotate-90">
                    <div className="">
                        <div className="font-bold  text-5xl  ">
                            SERVICES
                        </div>
                    </div>
                </section>
                <div className="w-[250px]  h-[200px] text-xl mt-14 ml-[1vw] bg-black border-t-2 border-l-4  border-whitek  "> &nbsp;  </div>
                <div className="w-[250px]   h-[200px] text-xl ml-16 -mt-28   bg-black border-t-2 border-l-4  border-white "> &nbsp;  </div>

            </section>
    </main>
    </>
  )
}