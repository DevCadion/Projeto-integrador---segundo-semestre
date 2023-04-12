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

function ContatoModal({ contatoOpen, closeContato }) {
  return (
    <>
      <Modal
        isOpen={contatoOpen}
        onRequestClose={closeContato}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex justify-between w-full'>
            <h2 className='border-b border-black w-full mb-4'>Contato</h2>
            <button className='btn-close' onClick={closeContato}>
              X
            </button>
          </div>
          <div className='flex justify-between'></div>
          <p>Nome:</p>
          <p>Contato:</p>
        </div>
      </Modal>
    </>
  )
}

export default ContatoModal