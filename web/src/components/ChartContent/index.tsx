import { Chart } from "react-google-charts"
import { Container } from "./styles";

export function ChartContent() {
  const data = [
    [
      "Month",
      "Facebook",
      "Twitter",
      "Instagram",
    ],

    ["2020/09", 157000, 180700, 780000],
    ["2021/08", 135000, 112000, 500000],
    ["2022/01", 165000, 100000, 500000],
  ];

  const options = {
    title: "Projeção de seguidores nas redes Sociais",
    vAxis: { title: "Seguidores" },
    hAxis: { title: "Mês" },
    seriesType: "bars",
    series: { 4: { type: "line" } },
  };

  return (
    <Container>
      <h3>Conteúdo Gráfico</h3>
      <Chart
        chartType="ComboChart"
        data={data}
        options={options}
        width="1170px"
        height="400px"
      />
    </Container>
  )
}