
import { ContextTaskProvider } from './contexts/ContextTask/ContextTaskProvider';
import { Home } from './Pages/Home';



export function App() {
  return (
    <>
    <ContextTaskProvider>
  <Home />
  </ContextTaskProvider>
  
  </>
  )
}