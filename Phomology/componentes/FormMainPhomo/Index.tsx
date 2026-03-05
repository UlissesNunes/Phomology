import styles from './FormMainPhomo.module.css'

import DefaultInput from '../DefaultInput'
import CycleRoutes from '../CycleRoutes'
import BotaoPhomo from '../BotaoPhomo'

import { PlayCircleIcon } from 'lucide-react'

export default function FormMainPhomo() {
  
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Task criada com sucesso!');
  }

  return (
    <section className={styles.FormMainPhomo}>
      <main>

        <DefaultInput
          id="MyInput"
          type="text"
          labelText="Digite sua task"
          placeholder="Qual será o tema do estudo?"
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