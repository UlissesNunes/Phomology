import styles from './Index.module.css'
import { useState, useEffect } from 'react'
import { BrainCircuit, Settings2, House, GalleryVerticalEnd, SunIcon, MoonIcon } from 'lucide-react'



type Theme = 'dark' | 'light'

export function Heading() {const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || null
    return savedTheme == 'light' ? 'light' : 'dark'
  })

  const nextTheme = {
    dark: <SunIcon size={20} color="#2f8eed"/>,
    light: <MoonIcon size={20} color="#2f8eed" />
  }

  const HandleTheme = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()

    setTheme(prevTheme =>
      prevTheme === 'dark' ? 'light' : 'dark'
    )
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
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
           {nextTheme[theme]}
          </a>
        </nav>
      </header>
    </>
  )
}
