import { View, Text, StatusBar, Image } from "react-native";
import React from "react";

const Inventory = () => {
  const SalesDetails = [
    {
      image: require("../../../src/assets/images/Frame1.png"),
      salesIncome: "143.3k",
      saleHeading: "Today’s Sale",
    },
    {
      image: require("../../../src/assets/images/Group34.png"),
      salesIncome: "$ 250,423",
      saleHeading: "Yearly Total Sales",
    },
    {
      image: require("../../../src/assets/images/doller.png"),
      salesIncome: "$68.9k",
      saleHeading: "Net Income",
    },
    {
      image: require("../../../src/assets/images/cart.png"),
      salesIncome: "343",
      saleHeading: "Products",
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View className="flex-1">
        <View className="px-3 bg-[#F4F5FC]">
          <Text
            style={{ fontFamily: "poppinsMedium" }}
            className="text-base pt-7"
          >
            Sales Summary
          </Text>
          <View className="w-full flex-row items-center">
            <View className="w-2/4 py-4  bg-white rounded-lg px-5">
              <View className="flex-row items-center flex gap-4">
                <Image
                  source={require("../../../src/assets/images/Frame1.png")}
                  className="w-10 h-10"
                  style={{ resizeMode: "contain" }}
                />
                <View>
                  <Text style={{ fontFamily: "poppinsRegular" }}>143.3k</Text>
                  <Text style={{ fontFamily: "poppinsRegular" }}>
                    Today’s Sale
                  </Text>
                </View>
              </View>
            </View>
            <View className="w-2/4">
              <Text>hello</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Inventory;
