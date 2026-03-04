import { createContext, useContext, useState } from "react"
import type { TaskStateModel } from "../../Models/TaskStateModel";

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

type ContextTaskType = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}


const InitialContextValue: ContextTaskType = {
  state: InitialState,
  setState: () => {},
}
export const ContextTask = createContext<ContextTaskType>(InitialContextValue)

type ContextTaskProviderProps = {
  children: React.ReactNode;
}

export function ContextTaskProvider({ children }: ContextTaskProviderProps) {

  const [state, setState] = useState(InitialState);

  return (
    <ContextTask.Provider value={{ state, setState }}>
      {children}
    </ContextTask.Provider>
  );
}



export function useContextTask() {
  return useContext(ContextTask);
  }