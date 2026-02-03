
import { MainTemplates } from "../../templates/MainTemplates";

export function NotFound404 () {
  return (
    <MainTemplates>
      <h1>404 - Página não encontrada 🚀</h1>
         <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo 🌌
          </p>
          <p>
            Mas calma, você não está perdido (ainda). Dá pra voltar em
            segurança para a <a href='/'>página principal</a> ou{' '}
            <a href='/history'>para o histórico</a> — ou pode ficar por aqui e
            fingir que achou uma página secreta que só os exploradores  conseguem acessar. 🧭✨
          </p>
          <p>
            fica aqui uma reflexão: "Se uma página não existe na
            internet, será que ela já existiu de verdade?" 🤔💭
          </p>
    </MainTemplates>
    
  )
}