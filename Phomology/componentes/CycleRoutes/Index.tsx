import styles from'./CycleRoutes.module.css' 

export default function index() {
  return (
    <>

    <section className={styles.CyclePhomo}>
  
       <div className={styles.cyclesPoints}>
        <span className={`${styles.cyclePoint} ${styles.workCurto}`}></span>
        <span className={`${styles.cyclePoint} ${styles.breakCurto}`}></span>
        <span className={`${styles.cyclePoint} ${styles.workLongo}`}></span>
        <span className={`${styles.cyclePoint} ${styles.breakLongo}`}></span>
        <span className={`${styles.cyclePoint} ${styles.workCurto}`}></span>
        <span className={`${styles.cyclePoint} ${styles.workLongo}`}></span>
        <span className={`${styles.cyclePoint} ${styles.breakCurto}`}></span>
        
         </div>
    </section>

    </>
  )
}

