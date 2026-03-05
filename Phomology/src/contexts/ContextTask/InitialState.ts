import type { TaskStateModel } from "../../Models/TaskStateModel";

export const InitialState: TaskStateModel = {
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