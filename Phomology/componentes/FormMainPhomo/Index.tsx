import styles from './FormMainPhomo.module.css'

import DefaultInput from '../DefaultInput'
import CycleRoutes from '../CycleRoutes'
import BotaoPhomo from '../BotaoPhomo'
import { PlayCircleIcon } from 'lucide-react'
import { useState } from 'react'
import type { TaskModel } from '../../src/Models/TaskModel'
import { useContextTask } from '../../src/contexts/ContextTask/UseContextProps'

export default function FormMainPhomo() {

  const [TaskName, setTaskName] = useState('');
  const {setState} = useContextTask();
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (TaskName === null) return;

    const TaskNameValueTrim = TaskName.trim();

    if (!TaskNameValueTrim) {
      alert('Digite uma task válida');
      return;
    }
    const newTask : TaskModel = {
      id: Date.now().toString(),
      name: TaskNameValueTrim,
      duration: 1,
      startDate: Date.now(),
      interruptDate: null,
      completeDate: null,
      type:{"workTime": 25, "shortBreakTime": 5, "longBreakTime": 15},
    };

    setState(prevState => {
     return { 
      ...prevState,
      config: {...prevState.config},
      activeTask: newTask,
      currentCycle: 1,
      secundsRemaining: newTask.duration * 60,
      formattedSecundesRemaining: "00:00",
      tasks: [...prevState.tasks, newTask]
    }
  });

   

    setTaskName('');

  }

  return (
    <section className={styles.FormMainPhomo}>
      <main>

        <DefaultInput
          id="MyInput"
          type="text"
          labelText="Digite sua task"
          placeholder="Qual será o tema do estudo?"
          value={TaskName}
          onChange={(event) => setTaskName(event.target.value)}
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
              <BotaoPhomo
                color="principal"
                icon={<PlayCircleIcon />}
              />
            </div>

          </form>
        </section>

      </main>
    </section>
  )
}