import { Link } from 'react-router-dom'

function Footer({ openSobre, openContato }) {
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
        <p> Calculo de Juros - Todos os diretos reservados</p>
      </div>
    </div>
  )
}

export default Footer
