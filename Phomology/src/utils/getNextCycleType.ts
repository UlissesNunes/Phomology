import type { TaskModel } from "../Models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  // Evita que o ciclo 0 dispare uma pausa longa
  if (currentCycle === 0) return 'workTime';

  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  
  return 'workTime';
}