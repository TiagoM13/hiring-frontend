import { Chart } from "react-google-charts"
import { Container } from "./styles";

export function ChartContent() {
  const data = [
    [
      { type: "date", label: "Month" },
      "AMZN",
    ],

    [new Date(2021, 0), 7000],
    [new Date(2021, 1), 5900],
    [new Date(2021, 2), 9000],
    [new Date(2021, 3), 14000],
    [new Date(2021, 4), 11000],
    [new Date(2021, 5), 16000],
  ];

  const options = {
    chart: {
      title: "Projeção de ganhos e perdas"
    },
    series: {
      0: { axis: "Value" },
    },
    axes: {
      y: {
        Value: { label: "Quantidade" },
      },
    }
  }

  return (
    <Container>
      <Chart
        className="chart"
        chartType="Line"
        data={data}
        options={options}
        width="900px"
        height="400px"
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