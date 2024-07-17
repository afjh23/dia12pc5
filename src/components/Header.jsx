import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 font-Barlow'>
        <div className=' max-w-[1440px] flex place-content-between '>
        <img  src={logo} alt="" />
        <Navbar/>
      </div>
    </header>
  )
}
