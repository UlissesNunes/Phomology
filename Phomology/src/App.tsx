
import { Home } from './Pages/Home';
import { ContextTaskProvider } from "./contexts/ContextTask";


export function App() {
  return (
    <>
    <ContextTaskProvider>
  <Home />
  </ContextTaskProvider>
  
  </>
  )
}