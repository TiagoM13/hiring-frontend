import { Chart } from "react-google-charts"
import { IGainsProps } from "../../App";
import { Container } from "./styles";

interface ChartContentProps {
  gains: IGainsProps
}

export function ChartContent({ gains }: ChartContentProps) {
  const data = [
    ["Gains", gains?.name],
    ["Último preço", gains?.lastPrice, ],
    ["Capitais ganhos", gains?.capitalGains],
    ["Preço da data", gains?.priceAtDate],
    ["Quantia comprada", gains?.purchasedAmount],
  ];

  return (
    <Container>
      <Chart
        className="chart"
        chartType="ColumnChart"
        data={data}
        width="900px"
        height="1000px"
        style={
          {
            fontSize: "14px",
            backgroundPosition: "3rem"
          }
        }
      />
    </Container>
  )
}