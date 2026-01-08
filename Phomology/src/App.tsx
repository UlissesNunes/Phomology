
import './App.css'
import Heading from '../componentes/Heading'
import CounterPhomo from '../componentes/CounterPhomo'

import BotaoPhomo from '../componentes/BotaoPhomo'
import FooterPhomo from '../componentes/FooterPhomo'
import DefaultInput from '../componentes/DefaultInput'
export function App() {

  return (
    <>  
    <Heading> </Heading>
    <CounterPhomo/>
    
    <DefaultInput id="MyInput" type="text" labelText='Digite sua task' required placeholder='Qual será o tema do estudo?' />
    <section className='FormPhomo'>
     <form className='form' action=''>

      <div className='formRow'>
      <p>Lorem, ipsum dolor sit amet consec</p>
      </div>

      <div className='formRow'>
      <p>Ciclos de estudo:</p>
      <p>0 0 0 0 0 0 0 0 0 0</p>
      </div>
      </form>  
    </section>
     <BotaoPhomo/>
      <FooterPhomo/>
    </>
  )
}


