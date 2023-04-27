import { useState } from 'react'
import { Link } from 'react-router-dom'
import SobreModal from '../pages/SobreModal'
import ContatoModal from '../pages/ContatoModal'

function Footer() {
  const [sobreOpen, setSobreOpen] = useState(false)
  const [contatoOpen, setContatoOpen] = useState(false)

  const openSobre = () => setSobreOpen(true)
  const closeSobre = () => setSobreOpen(false)

  const openContato = () => setContatoOpen(true)
  const closeContato = () => setContatoOpen(false)
  return (
    <div className='w-full flex flex-col py-4 px-8 items-center'>
      <div className='w-full border-t border-black'></div>
      <div className='w-full mt-4 flex justify-center'>
        <Link className='mx-6' to='/'>
          Home
        </Link>
        <Link className='mx-6' to='/' onClick={openSobre}>
          Sobre
        </Link>
        <Link className='mx-6' to='/' onClick={openContato}>
          Contato
        </Link>
      </div>
      <div className='mt-2 flex'>
        <p className='font-extrabold mr-1'>2023</p>
        <p>Calculo de Juros</p>
        <p className='hidden sm:block'> - Todos os diretos reservados</p>
      </div>
      <p className='sm:hidden'>Todos os diretos reservados</p>
      <SobreModal sobreOpen={sobreOpen} closeSobre={closeSobre} />
      <ContatoModal contatoOpen={contatoOpen} closeContato={closeContato} />
    </div>
  )
}

export default Footer
