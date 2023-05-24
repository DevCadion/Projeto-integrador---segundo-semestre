import Modal from 'react-modal'
import { useState } from 'react'

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

function EfetivaModal({ efetivaOpen, closeEfetiva }) {
  const [valores, setValores] = useState({
    taxa: 0,
    periodo: 0,
  })
  const { taxa, periodo } = valores

  const onClear = () => {
    setValores({
      taxa: 0,
      periodo: 0,
    })
  }

  const onMutate = (e) => {
    setValores((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let conversao = taxa / periodo
    conversao = conversao / 100
    let efetiva = (1 + conversao) ** periodo
    efetiva = efetiva - 1
    window.confirm(efetiva * 100 + '%')
  }

  return (
    <>
      <Modal
        isOpen={efetivaOpen}
        onRequestClose={closeEfetiva}
        style={customStyles}>
        <div className='flex flex-col'>
          <div className='flex justify-between text-center w-full border-b border-black mb-4'>
            <h2 className='w-full mb-1 text-2xl'>Taxa Efetiva</h2>
            <button className='btn-close' onClick={closeEfetiva}>
              X
            </button>
          </div>
          <div>
            <form onSubmit={onSubmit} className='flex flex-col w-5/6 m-auto'>
              <p>
                Por favor, informe o Periodo em baixo baseado nas calculaçoes
                seguindo:
              </p>
              <p>Capitalização mensal? Periodo=12 </p>
              <p>Capitalização bimestral? Periodo=6 </p>
              <p>Capitalização trimestal? Periodo=4 </p>
              <p>Capitalização semestral? Periodo=2 </p>
              <label>Taxa Unitaria (% ao mes): </label>
              <input
                className='rounded-lg bg-slate-300 px-2 mb-2'
                type='number'
                id='taxa'
                value={taxa}
                onChange={onMutate}
              />
              <label>Periodo (meses): </label>
              <input
                className='rounded-lg bg-slate-300 px-2'
                type='number'
                id='periodo'
                value={periodo}
                onChange={onMutate}
              />
              <div className='mt-12 place-self-end'>
                <button
                  type='button'
                  onClick={onClear}
                  className='bg-red-500 rounded-3xl px-4 hover:bg-red-400 w-fit mr-2 duration-150'>
                  Limpar
                </button>
                <button
                  type='button'
                  onClick={closeEfetiva}
                  className='bg-slate-400 rounded-3xl px-4 hover:bg-slate-300 w-fit mr-2 duration-150'>
                  Fechar
                </button>
                <button
                  type='submit'
                  className='bg-blue-700 rounded-3xl px-4 hover:bg-blue-600 w-fit duration-150'>
                  Calcular
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default EfetivaModal
