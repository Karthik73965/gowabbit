import MediaHeroLeft from '@/components/Services/MediaHeroLeft'
import MediaAcc from '@/components/Services/MediaAcc'
import SecondFotter from '@/components/SecondFotter'
type Props = {}

export default function TechincalServices({}: Props) {
  return (
   <>
    <section className='sm:flex grid mb-[10vw]'>
    <MediaHeroLeft/>
    <MediaAcc/>
    </section>
    <SecondFotter/>
    {/* <ThirdFotter/> */}
    </>
  )
}