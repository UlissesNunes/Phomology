
import { useContextTask } from '../../src/contexts/ContextTask/UseContextProps';
import styles from'./Counter.module.css' 

export default function CounterPhomo() {
  const {state} = useContextTask();
  
  return (
    <>

    <section className={styles.counterPhomo}>
       <p className={styles.p}>{state.formattedSecondsRemaining}</p>
    </section>

     
    </>
  )
}

