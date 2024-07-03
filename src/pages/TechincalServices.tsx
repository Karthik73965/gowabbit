import HeroLeft from '@/components/Services/HeroLeft'
import TechAcc from '@/components/Services/TechAcc'
import SecondFotter from '@/components/SecondFotter'
type Props = {}

export default function TechincalServices({}: Props) {
  return (
   <>
    <section className='sm:flex grid mb-[10vw]'>
    <HeroLeft/>
    <TechAcc/>
    </section>
    <SecondFotter/>
    {/* <ThirdFotter/> */}
    </>
  )
}