import './Index.modules.css'

import  { AlarmClockCheck } from 'lucide-react'

type HeadingProps = {
  children: React.ReactNode;   
}

export default function Heading({children}: HeadingProps) {
console.log(children)
  return (
    <>
    <header className='headerPai'>

           <AlarmClockCheck size={32} color='#00b37e'/>
           <h1 className='headerH1'>Phomology</h1>
    
        <nav className='headerNav'>
            <a href="">fd</a>
            <a href="">fd</a>
            <a href="">fd</a>
            <a href="">fd</a>
        </nav>
        
    </header>
    </>
  )
}