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
            </button>
          </div>
          <div className='flex justify-between'></div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="juros-simples-modal-capital">Capital:</label>
              <input type="number" class="form-control" id="juros-simples-modal-capital" required/>
            </div>
            <div class="form-group">
              <label for="juros-simples-modal-taxa">Taxa de juros (% a.m.):</label>
              <input type="number" class="form-control" id="juros-simples-modal-taxa" required/>
            </div>
            <div class="form-group">
              <label for="juros-simples-modal-periodo">Período (meses):</label>
              <input type="number" class="form-control" id="juros-simples-modal-periodo" required/>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button  class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button  class="btn btn-primary">Calcular</button>
        </div>
      </div>
    </div>
        </div>
      </Modal>
    </>
  )
}

export default SimplesModal
