
import './App.css'
import Heading from '../componentes/Heading'
import CounterPhomo from '../componentes/CounterPhomo'
import FormPhomo from '../componentes/FormPhomo'
import BotaoPhomo from '../componentes/BotaoPhomo'
import FooterPhomo from '../componentes/FooterPhomo'
import DefaultInput from '../componentes/DefaultInput'
export function App() {

  return (
    <>  
    <Heading> </Heading>
    <CounterPhomo/>
    <FormPhomo/>
    <DefaultInput id="MyInput" type="text"/>
     <BotaoPhomo/>
      <FooterPhomo/>
    </>
  )
}


