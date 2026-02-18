import CounterPhomo from "../../../componentes/CounterPhomo";
import FormMainPhomo from "../../../componentes/FormMainPhomo";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { MainTemplates } from "../../templates/MainTemplates";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home (Props: HomeProps) {
  console.log(Props);
  return (
    <>
    <MainTemplates>
        <CounterPhomo />
      <FormMainPhomo />
    </MainTemplates>
    
    </>
  )
}