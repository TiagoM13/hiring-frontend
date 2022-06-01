import { IResult } from "../../App";
import { ChartContent } from "../ChartContent";
import { Summary } from "../Summary";
import { TableHistory } from "../TableHistory";
import { Container } from "./styles";


interface DashboardProps {
  response: IResult;
}

export function Dashboard({ response }: DashboardProps) {
  const { price, compare, gains, history } = response;
  return (
    <Container>
      <Summary price={price} compare={compare} />
      <ChartContent gains={gains} />
      <TableHistory history={history}/>
    </Container>
  )
}