import CounterPhomo from "../../../componentes/CounterPhomo";
import FormMainPhomo from "../../../componentes/FormMainPhomo";
import { MainTemplates } from "../../templates/MainTemplates";

export function Home () {
  return (
    <MainTemplates>
        <CounterPhomo />
      <FormMainPhomo />
    </MainTemplates>
    
  )
}