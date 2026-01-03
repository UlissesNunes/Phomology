import styles from'./DefaultInput.module.css' 

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>

export default function index({id, type}: DefaultInputProps) {
  return (
    <>

     <label htmlFor={id} className={styles.label}>Digite a Task</label>
        <input type={type} id={id} />
      
     

     
    </>
  )
}

