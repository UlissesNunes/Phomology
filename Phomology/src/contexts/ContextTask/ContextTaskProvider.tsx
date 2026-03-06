import { useEffect, useState } from 'react';
import { InitialState } from './InitialState';
import { ContextTask } from './initialContextTask';



type ContextTaskProviderProps = {
  children: React.ReactNode;
};

export function ContextTaskProvider({ children }: ContextTaskProviderProps) {
  const [state, setState] = useState(InitialState);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <ContextTask.Provider value={{ state, setState }}>
      {children}
    </ContextTask.Provider>
  );
}
