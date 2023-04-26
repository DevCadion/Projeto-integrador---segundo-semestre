import Modal from 'react-modal'

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

function EfetivaModal({ efetivaOpen, closeEfetiva }) {
  return (
    <>
      <Modal
        isOpen={efetivaOpen}
        onRequestClose={closeEfetiva}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex justify-between w-full'>
            <h2 className='border-b border-black w-full mb-4'>Taxa Efetiva</h2>
            <button className='btn-close' onClick={closeEfetiva}>
              X
            </button>
          </div>
          <div className='flex justify-between'></div>
        </div>
      </Modal>
    </>
  )
}

export default EfetivaModal
