import { useContextTask } from '../../src/contexts/ContextTask';
import styles from'./Counter.module.css' 

export default function CounterPhomo() {
  const taskContext = useContextTask();
  console.log(taskContext.state.formattedSecondsRemaining);
  return (
    <>

    <section className={styles.counterPhomo}>
       <p className={styles.p}>00:00</p>
    </section>

     
    </>
  )
}

