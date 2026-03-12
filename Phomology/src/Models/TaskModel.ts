export type TaskType = 'workTime' | 'shortBreakTime' | 'longBreakTime';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: TaskType; // Agora é uma string específica, não o objeto de configuração
};