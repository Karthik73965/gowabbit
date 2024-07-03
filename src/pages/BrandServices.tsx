import BrandAcc from '@/components/Services/BrandAcc'
import SecondFotter from '@/components/SecondFotter'
import BrandHeroLeft from '@/components/Services/BrandHeroLeft'
type Props = {}

export default function TechincalServices({}: Props) {
  return (
   <>
    <section className='sm:flex grid mb-[10vw]'>
    <BrandHeroLeft/>
    <BrandAcc/>
    </section>
    <SecondFotter/>
    {/* <ThirdFotter/> */}
    </>
  )
}