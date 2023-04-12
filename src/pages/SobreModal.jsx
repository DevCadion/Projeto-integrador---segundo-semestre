import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
  content: {
    width: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

function SobreModal({ sobreOpen, closeSobre }) {
  return (
    <>
      <Modal
        isOpen={sobreOpen}
        onRequestClose={closeSobre}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex justify-between w-full'>
            <h2 className='border-b border-black w-full mb-4'>Sobre</h2>
            <button className='btn-close' onClick={closeSobre}>
              X
            </button>
          </div>
          <p>
            Calculadora de Juros Simples, Juros composto, Taxa Nominal e Taxa
            Efetiva
          </p>
        </div>
      </Modal>
    </>
  )
}

export default SobreModal
