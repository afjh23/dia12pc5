import imgDesktop from '../assets/desktop/image-header.jpg'
import imgMobile from '../assets/mobile/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'
export const Main = () => {
  return (
    <section>
        <picture>
            <source media='(max-width:639px)' srcSet={imgMobile}/>
            <source media='(min-width:640px)' srcSet={imgDesktop}/>
            <img src={imgMobile} alt="background header"></img>
        </picture>
        <p className='absolute top-[144px] w-[327px] font-Fraunces text-[40px] uppercase tracking-[6.25px] text-White text-center left-0 right-0 mx-auto sm:w-[600px]'>We are creatives</p>
        <img src={arrow} className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' alt=""></img>
    </section>
  )
}
