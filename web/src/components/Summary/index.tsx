import { Container } from "./styles";

export function Summary() {
  const data = {
    name: "AMZN",
    lastPrice: 2135.5,
    pricedAt: "2022-05-25"
  }

  return (
    <div>
      <Container>
        <div>
          <header>
            <h2>{data.name}</h2>
            <h3>Preço</h3>
            <p>$ {data.lastPrice}</p>
            <strong>{data.pricedAt}</strong>
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