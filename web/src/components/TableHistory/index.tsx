import { Container } from "./styles"

export function TableHistory() {
  const history = {
    name: "AMZN",
    opening: 3282.99,
    low: 3246.39,
    high: 3316.54,
    closing: 3271.2,
    pricedAt: "2022-04-01",
    volume: 2854475
  }

  return (
    <div>
      <Container>
        <h2>Histórico de Preços da {history.name}</h2>
        <table>
          <tr>
            <th>Abertura</th>
            <th>Baixo</th>
            <th>Alto</th>
            <th>Fechamento</th>
            <th>Data do preço</th>
            <th>Volume</th>
          </tr>
          <tr>
            <td>{history.opening}</td>
            <td>{history.low}</td>
            <td>{history.high}</td>
            <td>{history.closing}</td>
            <td>{history.pricedAt}</td>
            <td>{history.volume}</td>
          </tr>
          <tr>
            <td>{history.opening}</td>
            <td>{history.low}</td>
            <td>{history.high}</td>
            <td>{history.closing}</td>
            <td>{history.pricedAt}</td>
            <td>{history.volume}</td>
          </tr>
        </table>
      </Container>
    </div>
  )
}