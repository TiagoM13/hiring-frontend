import { ChartContent } from "../ChartContent";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <ChartContent />
    </Container>
  )
}