import { useState } from 'react'
import SobreModal from './SobreModal'
import ContatoModal from './ContatoModal'
import SimplesModal from '../components/modals/SimplesModal'
import CompostosModal from '../components/modals/CompostosModal'
import NominalModal from '../components/modals/NominalModal'
import EfetivaModal from '../components/modals/EfetivaModal'

function Home() {
  // const [menuOpen, setMenuOpen] = useState(false)
  const [sobreOpen, setSobreOpen] = useState(false)
  const [contatoOpen, setContatoOpen] = useState(false)
  const [simplesOpen, setSimplesOpen] = useState(false)
  const [compostosOpen, setCompostosOpen] = useState(false)
  const [nominalOpen, setNominalOpen] = useState(false)
  const [efetivaOpen, setEfetivaOpen] = useState(false)

  // const openMenu = () => setMenuOpen(true)
  // const closeMenu = () => setMenuOpen(false)

  const openSobre = () => setSobreOpen(true)
  const closeSobre = () => setSobreOpen(false)

  const openContato = () => setContatoOpen(true)
  const closeContato = () => setContatoOpen(false)

  const openSimples = () => setSimplesOpen(true)
  const closeSimples = () => setSimplesOpen(false)

  const openCompostos = () => setCompostosOpen(true)
  const closeCompostos = () => setCompostosOpen(false)

  const openNominal = () => setNominalOpen(true)
  const closeNominal = () => setNominalOpen(false)

  const openEfetiva = () => setEfetivaOpen(true)
  const closeEfetiva = () => setEfetivaOpen(false)
  return (
    <>
      <div className='flex flex-col md:flex-row items-center md:items-end mx-2 sm:mx-4 md:mx-9 lg:mx-16'>
        {/* ----------------------------------- */}
        <div className='recolor rounded-lg'>
          <p className='font-extrabold'>Juros Simples</p>
          <p>
            O juros simples é uma taxa previante definida e que incide somente
            sobre o valor inicial.
          </p>
          <button
            onClick={openSimples}
            className='btn-recolor rounded-lg py-1 px-2 text-white hover:bg-blue-600 duration-100'>
            Acessar
          </button>
        </div>
        {/* ----------------------------------- */}
        <div className='recolor-middle rounded-lg'>
          <p className='font-extrabold'>Juros Compostos</p>
          <p>
            Juros composto são uma prática de juros sobre juros. No seu cálculo,
            o acréscimo incide sempre pelo capital acumulado e não apenas no
            inicial , como é o caso dos juros simples..
          </p>
          <button
            onClick={openCompostos}
            className='btn-recolor rounded-lg py-1 px-2 text-white hover:bg-blue-600 duration-100'>
            Acessar
          </button>
        </div>
        {/* ----------------------------------- */}
        <div className='recolor-middle rounded-lg'>
          <p className='font-extrabold'>Taxa Nominal</p>
          <p>
            A taxa de juro nominal é a taxa que obrigatoriamente deve ser
            indicada em todos os contratos de créditos ou nas aplicações e
            corresponde ao período de um ano. Sendo que, é uma remuneração
            monetária sujeita aos efeitos da inflação.
          </p>
          <button
            onClick={openNominal}
            className='btn-recolor rounded-lg py-1 px-2 text-white hover:bg-blue-600 duration-100'>
            Acessar
          </button>
        </div>
        {/* ----------------------------------- */}
        <div className='recolor rounded-lg'>
          <p className='font-extrabold'>Taxa Efetiva</p>
          <p>
            Taxa de juro efetiva é a taxa de juros expressa em um períodoigual a
            da formação e incorporação de juros ao capital. A taxa efetiva usa
            um prazo de referência diferente do prazo de capitalização
          </p>
          <button
            onClick={openEfetiva}
            className='btn-recolor rounded-lg py-1 px-2 text-white hover:bg-blue-600 duration-100'>
            Acessar
          </button>
        </div>
      </div>
      <SobreModal sobreOpen={sobreOpen} closeSobre={closeSobre} />
      <ContatoModal contatoOpen={contatoOpen} closeContato={closeContato} />
      <SimplesModal simplesOpen={simplesOpen} closeSimples={closeSimples} />
      <CompostosModal
        compostosOpen={compostosOpen}
        closeCompostos={closeCompostos}
      />
      <NominalModal nominalOpen={nominalOpen} closeNominal={closeNominal} />
      <EfetivaModal efetivaOpen={efetivaOpen} closeEfetiva={closeEfetiva} />
    </>
  )
}

export default Home
