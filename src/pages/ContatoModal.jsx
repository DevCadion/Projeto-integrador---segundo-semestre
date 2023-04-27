import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '90%',
    maxWidth: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

function ContatoModal({ contatoOpen, closeContato }) {
  return (
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
        <div className='flex flex-col justify-between w-5/6'>
          <div className='flex flex-col md:flex-row justify-evenly md:mb-4'>
            <div className='mb-2'>
              <p>Nome: Ali Abbara</p>
              <p>Contato: E-mail</p>
            </div>
            <div className='mb-2'>
              <p>Nome: Caio Moreira dos Santos</p>
              <p>Contato: E-mail</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-evenly md:mr-7'>
            <div className='mb-2'>
              <p>Nome: Eder Bruno</p>
              <p>Contato: E-mail</p>
            </div>
            <div>
              <p>Nome: Mateus Marchi</p>
              <p>Contato: E-mail</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ContatoModal
