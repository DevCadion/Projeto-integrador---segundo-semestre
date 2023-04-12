import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Logo from '../assets/CJLogo.png'
import MenuModal from './MenuModal'

function Navbar({ openSobre, openContato }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className='flex flex-row justify-between h-14 border-b border-black items-center p-2 mx-7'>
      <div className='w-full'>
        <VscMenu
          className='hover:cursor-pointer'
          onClick={openMenu}
          size={35}
        />
      </div>
      <div className='w-full flex justify-center'>
        <img className='w-12' src={Logo} alt='logo pic' />
      </div>
      <div className='w-full flex flex-row justify-between'>
        <Link to='/'>Home</Link>
        <Link to='/' onClick={openSobre}>
          Sobre
        </Link>
        <Link to='/' onClick={openContato}>
          Contato
        </Link>
      </div>
      <MenuModal isOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  )
}

export default Navbar
