import styles from'./Botao.module.css' 


type BotaoPhomoProps = {
  icon: React.ReactNode
  color?: 'principal' | 'danger'
} & React.ComponentProps<'button'>

export default function index({icon , color= 'principal' ,...props}: BotaoPhomoProps) {
  return (
    <>

    <button className={`${styles.BotaoPhomo} ${styles[color]}`}
       { ...props}>

        {icon}
    </button>

    </>
  )
}

