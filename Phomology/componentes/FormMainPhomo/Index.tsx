import styles from './FormMainPhomo.module.css';

import DefaultInput from '../DefaultInput';
import CycleRoutes from '../CycleRoutes';
import BotaoPhomo from '../BotaoPhomo';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import type { TaskModel } from '../../src/Models/TaskModel';
import { useContextTask } from '../../src/contexts/ContextTask/UseContextProps';
import { getNextCycle } from '../../src/utils/getNextCycle';
import { getNextCycleType } from '../../src/utils/getNextCycleType';

export default function FormMainPhomo() {
  const [TaskName, setTaskName] = useState('');
  const { state, setState } = useContextTask();

  const nextCycle = getNextCycle(state.currentCycle);
  console.log('nextCycle', nextCycle);

   const nextCyleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (TaskName === null) return;

    const TaskNameValueTrim = TaskName.trim();

    if (!TaskNameValueTrim) {
      alert('Digite uma task válida');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: TaskNameValueTrim,
      duration: state.config[nextCyleType] || state.config.workTime, // Usa o tipo de ciclo para determinar a duração
      startDate: Date.now(),
      interruptDate: null,
      completeDate: null,
      type: nextCyleType,
    };

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secundsRemaining: newTask.duration * 60,
        formattedSecundesRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
      };
    });

    setTaskName('');
  }

  return (
    <section className={styles.FormMainPhomo}>
      <main>
        <DefaultInput
          id='MyInput'
          type='text'
          labelText='Digite sua task'
          placeholder='Qual será o tema do estudo?'
          value={TaskName}
          onChange={event => setTaskName(event.target.value)}
        />

        <section className={styles.FormPhomo}>
          <form onSubmit={handleCreateNewTask} className={styles.form}>
            <div className={styles.formRow}>
              <p>Lorem, ipsum dolor sit amet consec</p>
            </div>

            <div className={styles.formRow}>
              <p>Ciclos de estudo:</p>
              <CycleRoutes />
            </div>

            <div className={styles.formRow}>
              <BotaoPhomo color='principal' icon={<PlayCircleIcon />} />
            </div>
          </form>
        </section>
      </main>
    </section>
  );
}
