import { Container } from "./styles";

export function Summary() {
  return (
    <div>
      <Container>
        <div>
          <header>
            <h3>Preço</h3>
            <p>$ 900,00</p>
          </header>
        </div>
        <div>
          <header>
            <h3>Preço Histórico</h3>
            <p>$ 1700,00</p>
          </header>
        </div>
        <div>
          <header>
            <h3>Comparação de Ações</h3>
            <p>$ 270,00</p>
          </header>
        </div>
      </Container>
    </div>
  )
}