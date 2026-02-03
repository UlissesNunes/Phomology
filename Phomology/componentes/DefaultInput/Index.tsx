import styles from'./DefaultInput.module.css' 

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>

export default function index({id, type, labelText , ...rest}: DefaultInputProps) {
  return (
    <>

     <section className={styles.defaultInput}>
       <label htmlFor={id} className={styles.label}>{labelText}</label>
          <input type={type} id={id} {...rest} />
       
     </section>
     

     
    </>
  )
}

