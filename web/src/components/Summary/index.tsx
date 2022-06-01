import { IResult, IPriceProps, ICompareProps } from "../../App";
import { Container, Content } from "./styles";

interface SummaryProps {
  price: IPriceProps;
  compare: ICompareProps;
}

export function Summary({ price, compare }: SummaryProps) {
  return (
    <div>
      <Container>
        <div>
          <header>
            <h2>{price?.name}</h2>
            <h3>Preço: <strong>$ {price?.lastPrice}</strong></h3>
            <p>{price?.pricedAt}</p>
          </header>
        </div>

        <div>
          <h2>Comparação de Ações</h2>
          <Content>
            {
              compare?.lastPrices?.map((values) => {
                return (
                  <>
                    <div>
                      <ul>
                        <li>Name:</li>
                        <li>Preço:</li>
                        <li>Data:</li>
                      </ul>
                      <ul>
                        <li>{values?.name}</li>
                        <li className="prices">$ {values?.lastPrice}</li>
                        <li>{values?.pricedAt}</li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li>Name:</li>
                        <li>Preço:</li>
                        <li>Data:</li>
                      </ul>
                      <ul>
                        <li>{values?.name}</li>
                        <li className="prices">$ {values?.lastPrice}</li>
                        <li>{values?.pricedAt}</li>
                      </ul>
                    </div>
                  </>
                )
              })
            }
          </Content>
        </div>
      </Container>
    </div>
  )
}