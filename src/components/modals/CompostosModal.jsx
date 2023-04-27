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

function CompostosModal({ compostosOpen, closeCompostos }) {
  const [valores, setValores] = useState({
    capital: 0,
    taxa: 0,
    periodo: 0,
    juros: 0,
  })
  const { capital, taxa, periodo, juros } = valores

  const onClear = () => {
    setValores({
      capital: 0,
      taxa: 0,
      periodo: 0,
      juros: 0,
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
    let juros = (capital * taxa * periodo) / 100
    window.confirm('Juros: ' + juros)
  }

  return (
    <>
      <Modal
        isOpen={compostosOpen}
        onRequestClose={closeCompostos}
        style={customStyles}>
        <div className='flex flex-col'>
          <div className='flex justify-between text-center w-full border-b border-black mb-4'>
            <h2 className='w-full mb-1 text-2xl'>Juros Compostos</h2>
            <button className='btn-close' onClick={closeCompostos}>
              X
            </button>
          </div>
          <div>
            <form onSubmit={onSubmit} className='flex flex-col w-5/6 m-auto'>
              <label>Capital (R$): </label>
              <input
                className='rounded-lg bg-slate-300 px-2 mb-2'
                type='number'
                id='capital'
                value={capital}
                onChange={onMutate}
              />
              <label>Taxa de Juros (% ao mes): </label>
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
                  onClick={closeCompostos}
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

export default CompostosModal
