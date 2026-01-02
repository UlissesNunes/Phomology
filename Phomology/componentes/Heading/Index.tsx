import styles from './Index.module.css'

import { BrainCircuit,  Settings2, House, GalleryVerticalEnd, Sun } from 'lucide-react'


type HeadingProps = {
  children: React.ReactNode;   
}

export default function Heading({children}: HeadingProps) {
console.log(children)
  return (
    <>
    <header className={styles.headerPai}>

           <BrainCircuit size={32} color='#2f8eed' className='AlarmClockCheck'/>
           <h1 className='headerH1'>Phomology</h1>
    
        <nav className='headerNav'>
            <a href=""><House size={20} color='#2f8eed'/></a>
            <a href=""><GalleryVerticalEnd size={20} color='#2f8eed'/></a>
            <a href=""><Settings2 size={20} color='#2f8eed'/></a>
            <a href=""><Sun size={20} color='#2f8eed'/></a>
        </nav>
        
    </header>
    </>
  )
}