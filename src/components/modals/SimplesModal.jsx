import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '90%',
    maxWidth: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

function SimplesModal({ simplesOpen, closeSimples }) {
  return (
    <>
      <Modal
        isOpen={simplesOpen}
        onRequestClose={closeSimples}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex justify-between w-full'>
            <h2 className='border-b border-black w-full mb-4'>Juros Simples</h2>
            <button className='btn-close' onClick={closeSimples}>
              X
            </button>
          </div>
          <div className='flex justify-between'></div>
          <p>Simples</p>
        </div>
      </Modal>
    </>
  )
}

export default SimplesModal
