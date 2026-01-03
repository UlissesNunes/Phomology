import styles from'./FormPhomo.module.css' 

export default function index() {
  return (
    <>

    <section className={styles.FormPhomo}>
     <form className='form' action=''>
      <div className='formRow'>
      <label htmlFor="">Digite a Task</label>
        <input type="text" id="input" />
      
      </div>

      <div className='formRow'>
      <p>Lorem, ipsum dolor sit amet consec</p>
      </div>

      <div className='formRow'>
      <p>Ciclos de estudo:</p>
      <p>0 0 0 0 0 0 0 0 0 0</p>
      </div>
      </form>  
    </section>
   
     
    </>
  )
}

