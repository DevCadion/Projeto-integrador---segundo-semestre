import Modal from 'react-modal'
import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'

const customStyles = {
  content: {
    width: '170px',
    height: '100%',
    top: '50%',
    left: '11%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

function MenuModal({ isOpen, closeMenu }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <VscMenu
            className='hover:cursor-pointer border-b border-black w-full'
            onClick={closeMenu}
            size={35}
          />
          <p className='py-2 border-b border-black w-full'>Juros Simples</p>
          <p className='py-2 border-b border-black w-full'>Juros Compostos</p>
          <p className='py-2 border-b border-black w-full'>Taxa Nominal</p>
          <p className='py-2 border-b border-black w-full'>Taxa Efetiva</p>
        </div>
      </Modal>
    </>
  )
}

export default MenuModal
