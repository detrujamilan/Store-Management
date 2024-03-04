import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
import { LinearGradient } from "react-native-svg";

const Chart = () => {
  const screenWidth = Dimensions.get("screen").width;
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [50, 65, 75, 85, 99, 100],
      },
    ],
  };
  return (
    <View style={{ paddingHorizontal: 12 }}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 22}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLabels
        withHorizontalLabels
        yAxisInterval={1}
        showBarTops={false}
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: () => `#5C6F88`,
          labelColor: () => `#5C6F88`,
          barPercentage: 1,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#5C6F88",
          },
        }}
        bezier
        style={{
          marginVertical: 4,
        }}
      />
    </View>
  );
};

export default Chart;
