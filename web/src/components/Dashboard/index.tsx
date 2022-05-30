import { ChartContent } from "../ChartContent";
import { Summary } from "../Summary";
import { TableHistory } from "../TableHistory";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <ChartContent />
      <TableHistory />
    </Container>
  )
}