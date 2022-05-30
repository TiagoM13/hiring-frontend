import { Container, Content } from "./styles";

export function Summary() {
  const lastPrices =
  {
    name: "ITUB4",
    lastPrice: 0.3826,
    pricedAt: "2020-05-18"

  }

  const data = {
    name: "AMZN",
    lastPrice: 2221.55,
    pricedAt: "2022-05-26"
  }

  return (
    <div>
      <Container>
        <div>
          <header>
            <h2>{data.name}</h2>
            <h3>Preço: <strong>$ {data.lastPrice}</strong></h3>
            <p>{data.pricedAt}</p>
          </header>
        </div>

        <div>
          <h2>Comparação de Ações</h2>
          <Content>

            <div>
              <ul>
                <li>Name:</li>
                <li>Preço:</li>
                <li>Data:</li>
              </ul>
              <ul>
                <li>{lastPrices.name}</li>
                <li className="prices">$ {lastPrices.lastPrice}</li>
                <li>{lastPrices.pricedAt}</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Name:</li>
                <li>Preço:</li>
                <li>Data:</li>
              </ul>
              <ul>
                <li>{lastPrices.name}</li>
                <li className="prices">$ {lastPrices.lastPrice}</li>
                <li>{lastPrices.pricedAt}</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Name:</li>
                <li>Preço:</li>
                <li>Data:</li>
              </ul>
              <ul>
                <li>{lastPrices.name}</li>
                <li className="prices">$ {lastPrices.lastPrice}</li>
                <li>{lastPrices.pricedAt}</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Name:</li>
                <li>Preço:</li>
                <li>Data:</li>
              </ul>
              <ul>
                <li>{lastPrices.name}</li>
                <li className="prices">$ {lastPrices.lastPrice}</li>
                <li>{lastPrices.pricedAt}</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Name:</li>
                <li>Preço:</li>
                <li>Data:</li>
              </ul>
              <ul>
                <li>{lastPrices.name}</li>
                <li className="prices">$ {lastPrices.lastPrice}</li>
                <li>{lastPrices.pricedAt}</li>
              </ul>
            </div>
          </Content>
        </div>
        {/* <div>
          <header>
            <h3>Preço Histórico</h3>
            <p>$ 1700,00</p>
          </header>
        </div> */}
      </Container>
    </div>
  )
}