import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { InitialState } from "./InitialState";

type ContextTaskType = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const InitialContextValue: ContextTaskType = {
  state: InitialState,
  setState: () => {},
}

export const ContextTask = createContext<ContextTaskType>(InitialContextValue)
