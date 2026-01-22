import styles from './Index.module.css'
import { useState, useEffect } from 'react'
import { BrainCircuit, Settings2, House, GalleryVerticalEnd, Sun } from 'lucide-react'

type HeadingProps = {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

export default function Heading({ children }
  : HeadingProps) {
  const [theme, setTheme] = useState<Theme>('dark')
console.log(children)
  const HandleTheme = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()

    setTheme(prevTheme =>
      prevTheme === 'dark' ? 'light' : 'dark'
    )
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <header className={styles.headerPai}>
        <BrainCircuit size={35} color="#2f8eed" />
        <h1 className="headerH1">Phomology</h1>

        <nav className="headerNav">
          <a className={styles.a} title="Home">
            <House size={20} color="#2f8eed" />
          </a>

          <a className={styles.a} title="Histórico">
            <GalleryVerticalEnd size={20} color="#2f8eed" />
          </a>

          <a className={styles.a} title="Configurações">
            <Settings2 size={20} color="#2f8eed" />
          </a>

          <a
            href="#"
            className={styles.a}
            title="Mudar tema"
            onClick={HandleTheme}
          >
            <Sun size={20} color="#2f8eed" />
          </a>
        </nav>
      </header>
    </>
  )
}
