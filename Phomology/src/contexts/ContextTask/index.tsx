import { createContext } from "react"
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

const InitialContextValue: ContextTaskType = {
  state: InitialState,
  setState: () => {},
}

type ContextTaskType = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export const ContextTask = createContext<ContextTaskType>(InitialContextValue)

type ContextTaskProviderProps = {
  children: React.ReactNode;
}

export function ContextTaskProvider({ children }: ContextTaskProviderProps) {

  return (
    <ContextTask.Provider value={InitialContextValue}>
      {children}
    </ContextTask.Provider>
  );
}