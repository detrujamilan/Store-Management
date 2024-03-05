import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";

const Chart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [5000, 10000, 15000, 20000, 250000],
      },
    ],
  };
 

  return (
    <View className="w-screen overflow-x-scroll ">
      <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
        <BarChart
          fromZero={true}
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, 1)`,
            barPercentage: 0.8,
            useShadowColorFromDataset: false,
            formatYLabel: (value) => Number(value).toFixed(0),
          }}
          bezier
          
          withInnerLines={false}
          showBarTops={false}
          style={{
            borderRadius: 10,
            alignSelf: "center",
          }}
          
        />
      </ScrollView>
    </View>
  );
};

export default Chart;
