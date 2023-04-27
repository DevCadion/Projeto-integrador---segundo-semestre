import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Logo from '../assets/CJLogo.png'
import MenuModal from './MenuModal'
import SobreModal from '../pages/SobreModal'
import ContatoModal from '../pages/ContatoModal'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sobreOpen, setSobreOpen] = useState(false)
  const [contatoOpen, setContatoOpen] = useState(false)

  const openSobre = () => setSobreOpen(true)
  const closeSobre = () => setSobreOpen(false)

  const openContato = () => setContatoOpen(true)
  const closeContato = () => setContatoOpen(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className='flex flex-row justify-between h-14 border-b border-black items-center p-2 mx-7 mb-3'>
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
      <div className='w-full hidden sm:flex flex-row justify-between'>
        <Link to='/'>Home</Link>
        <Link to='/' onClick={openSobre}>
          Sobre
        </Link>
        <Link to='/' onClick={openContato}>
          Contato
        </Link>
      </div>
      <MenuModal isOpen={menuOpen} closeMenu={closeMenu} />
      <SobreModal sobreOpen={sobreOpen} closeSobre={closeSobre} />
      <ContatoModal contatoOpen={contatoOpen} closeContato={closeContato} />
    </div>
  )
}

export default Navbar
