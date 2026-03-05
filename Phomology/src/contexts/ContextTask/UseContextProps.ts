import { useContext } from 'react';
import { ContextTask } from './initialContextTask';


export function useContextTask() {
  return useContext(ContextTask);
}
