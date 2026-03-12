import { useContextTask } from '../../src/contexts/ContextTask/UseContextProps';
import type { TaskType } from '../../src/Models/TaskModel';
import { getNextCycle } from '../../src/utils/getNextCycle';
import { getNextCycleType } from '../../src/utils/getNextCycleType';
import styles from'./CycleRoutes.module.css' 

export default function CycleRoutes() {
  
  const { state } = useContextTask();
  console.log('state', state);

  const cycleFormats = Array.from({ length: state.currentCycle })
 
  const cycleDescInTheMap: Record<TaskType, string> = {
    workTime: 'Ciclo de trabalho',
    shortBreakTime: 'Ciclo de descanso curto',
    longBreakTime: 'Ciclo de descanso longo',
  }
    
  return (
    <>

    <section className={styles.CyclePhomo}>
      <span>ciclos:</span>
       <div className={styles.cyclesPoints}>
        {cycleFormats.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return(<span className={`${styles.cyclePoint} ${styles[nextCycleType]}`}
          aria-label={` Estamos no ${cycleDescInTheMap[nextCycleType]}`}
          title={` Estamos no ${cycleDescInTheMap[nextCycleType]}`}
          key={index}>
        
        </span>
          )
          
        })}
         </div>
    </section>

    </>
  )
}

