import { IHistoryProps } from "../../App";
import { Container } from "./styles"

interface TableHistoryProps {
  history: IHistoryProps
}

export function TableHistory({ history }: TableHistoryProps) {
  // const history = {
  //   name: "AMZN",
  //   opening: 3282.99,
  //   low: 3246.39,
  //   high: 3316.54,
  //   closing: 3271.2,
  //   pricedAt: "2022-04-01",
  //   volume: 2854475
  // }

  return (
    <div>
      <Container>
        <h2>Histórico de Preços da {history?.name}</h2>
        <table>
          <thead>
            <tr>
              <th>Abertura</th>
              <th>Baixo</th>
              <th>Alto</th>
              <th>Fechamento</th>
              <th>Data do preço</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {
              history?.prices?.map((values) => {
                return (
                  <tr>
                    <td>{values?.opening}</td>
                    <td>{values?.low}</td>
                    <td>{values?.high}</td>
                    <td>{values?.closing}</td>
                    <td>{values?.pricedAt}</td>
                    <td>{values?.volume}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </Container>
    </div>
  )
}