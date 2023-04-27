import Modal from 'react-modal'
import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import SimplesModal from '../components/modals/SimplesModal'
import CompostosModal from '../components/modals/CompostosModal'
import NominalModal from '../components/modals/NominalModal'
import EfetivaModal from '../components/modals/EfetivaModal'

const customStyles = {
  content: {
    width: '170px',
    height: '100%',
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: '0%',
  },
}

Modal.setAppElement('#root')

function MenuModal({ isOpen, closeMenu }) {
  const [simplesOpen, setSimplesOpen] = useState(false)
  const [compostosOpen, setCompostosOpen] = useState(false)
  const [nominalOpen, setNominalOpen] = useState(false)
  const [efetivaOpen, setEfetivaOpen] = useState(false)

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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <div className='hover:cursor-pointer border-b border-black w-full'>
            <VscMenu
              className='ml-4 relative -top-2.5'
              onClick={closeMenu}
              size={35}
            />
          </div>
          <p
            onClick={() => {
              closeMenu()
              openSimples()
            }}
            className='hover:cursor-pointer py-2 border-b border-black w-full'>
            Juros Simples
          </p>
          <p
            onClick={() => {
              closeMenu()
              openCompostos()
            }}
            className='hover:cursor-pointer py-2 border-b border-black w-full'>
            Juros Compostos
          </p>
          <p
            onClick={() => {
              closeMenu()
              openNominal()
            }}
            className='hover:cursor-pointer py-2 border-b border-black w-full'>
            Taxa Nominal
          </p>
          <p
            onClick={() => {
              closeMenu()
              openEfetiva()
            }}
            className='hover:cursor-pointer py-2 border-b border-black w-full'>
            Taxa Efetiva
          </p>
        </div>
      </Modal>
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

export default MenuModal
