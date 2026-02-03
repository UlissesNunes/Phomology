
import './App.css'
import { useState } from 'react'
import {Heading} from '../componentes/Heading'
import CounterPhomo from '../componentes/CounterPhomo'
import CycleRoutes from '../componentes/CycleRoutes'
import BotaoPhomo from '../componentes/BotaoPhomo'
import FooterPhomo from '../componentes/FooterPhomo'
import DefaultInput from '../componentes/DefaultInput'
import NotesManager from '../componentes/NotesManager'
import { PlayCircleIcon, FilePenLineIcon, ArrowLeftCircle } from 'lucide-react'

export function App() {
  const [isNotesPage, setIsNotesPage] = useState(false)

  return (
    // A classe fade-container garante que a troca de conteúdo seja suave
    <div className={`app-wrapper ${isNotesPage ? 'view-notes' : 'view-home'}`}>
      <Heading  />

      {/* TELA DE NOTAS */}
      {isNotesPage ? (
        <main className="fade-in-section">
          <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
            <button 
              onClick={() => setIsNotesPage(false)} 
              className="btnVoltar"
            >
              <ArrowLeftCircle size={24} /> Voltar ao Timer
            </button>
            <NotesManager />
          </div>
        </main>
      ) : (
        /* TELA HOME */
        <main className="fade-in-section">
          <CounterPhomo />
          <DefaultInput 
            id="MyInput" 
            type="text" 
            labelText='Digite sua task' 
            placeholder='Qual será o tema do estudo?' 
          />

          <section className='FormPhomo'>
            <form className='form'>
              <section>
                <a 
                  href="#" 
                  className='anotacao' 
                  onClick={(e) => { e.preventDefault(); setIsNotesPage(true); }}
                >
                  <FilePenLineIcon size={20} color="#2f8eed" />
                  <span>anotações e referências</span>
                </a>
              </section>

              <div className='formRow'><p>Lorem, ipsum dolor sit amet consec</p></div>
              <div className='formRow'>
                <p>Ciclos de estudo:</p>
                <CycleRoutes />
              </div>
            </form>

            <BotaoPhomo color='principal' icon={<PlayCircleIcon />} />
            {/* <BotaoPhomo color='danger' icon={<StopCircleIcon />} />*/}
          </section>
        </main>
      )}

      <FooterPhomo />
    </div>
  )
}