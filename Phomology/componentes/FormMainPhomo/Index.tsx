import styles from'./FormMainPhomo.module.css' 

import DefaultInput from '../DefaultInput'
import CycleRoutes from '../CycleRoutes'
import BotaoPhomo from '../BotaoPhomo'

import { PlayCircleIcon } from 'lucide-react'

export default function index() {
  return (
    <>

    <section className={styles.FormMainPhomo}>
        <main>
                
                <DefaultInput 
                  id="MyInput" 
                  type="text" 
                  labelText='Digite sua task' 
                  placeholder='Qual será o tema do estudo?' 
                />
      
                <section className='FormPhomo'>
                  <form className='form'>
                    
      
                    <div className='formRow'><p>Lorem, ipsum dolor sit amet consec</p></div>
                    <div className='formRow'>
                      <p>Ciclos de estudo:</p>
                      <CycleRoutes />
                    </div>
                  </form>
      
                  <BotaoPhomo color='principal' icon={<PlayCircleIcon />} />
                  {/* <BotaoPhomo color='danger' icon={<StopCircleIcon />} />*/}
                </section>
              </main>
          
      
    </section>

     
    </>
  )
}

