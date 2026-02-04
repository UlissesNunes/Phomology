
import { GenericHtml } from "../../../componentes/GenericHtml";
import { MainTemplates } from "../../templates/MainTemplates";

export function NotFound404 () {
  return (
    <MainTemplates>
      <GenericHtml>
      <h1>404 - Página não encontrada 🚀</h1>
         <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo 🌌
          </p>
          <p>
            Mas calma, você não está perdido (ainda). Dá pra voltar em
            segurança para a <a href='/'>página principal</a> ou{' '}
            <a href='/history'>para o histórico</a>🧭 
          </p>
          <p>
            fica aqui uma reflexão: "Se uma página não existe na
            internet, será que ela já existiu de verdade ou é uma página secreta?" 🤔💭
          </p>
      </GenericHtml>
    </MainTemplates>
    
  )
}