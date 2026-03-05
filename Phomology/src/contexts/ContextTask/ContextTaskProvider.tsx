import { useState } from 'react';
import { InitialState } from './InitialState';
import { ContextTask } from './initialContextTask';


type ContextTaskProviderProps = {
  children: React.ReactNode;
};

export function ContextTaskProvider({ children }: ContextTaskProviderProps) {
  const [state, setState] = useState(InitialState);

  return (
    <ContextTask.Provider value={{ state, setState }}>
      {children}
    </ContextTask.Provider>
  );
}
