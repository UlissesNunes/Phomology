
import type { TaskStateModel } from "./Models/TaskStateModel";

import { useState } from 'react';


import { Home } from './Pages/Home';

const InitialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 35,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};



export function App() {

  const [state, setState] = useState(InitialState);
  return <Home state={state} setState={setState}/>
  
}