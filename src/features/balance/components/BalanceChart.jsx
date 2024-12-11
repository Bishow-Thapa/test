import React from "react";
import { Pie } from "@ant-design/charts";
import { useGetBalanceQuery } from "../services/balanceApi";

const BalanceChart = () => {
  const { data, error, isLoading } = useGetBalanceQuery();

  if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error fetching balance data</div>;

  const chartData = [
    { type: "Spending", value: data.spending },
    { type: "Remaining", value: data.remaining },
  ];

  const config = {
    appendPadding: 10,
    data: chartData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    interactions: [{ type: "element-active" }],
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <h3>Balance Summary</h3>
      <Pie {...config} />
    </div>
  );
};

export default BalanceChart;
