import Modal from 'react-modal'
import { VscMenu } from 'react-icons/vsc'

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
