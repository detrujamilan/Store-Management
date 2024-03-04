import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

const Carousels = () => {
  const data = [
    {
      name: "Macbook Pro",
      image: require("../../../src/assets/images/macBook.png"),
    },
    {
      name: "Iphone 14 pro",
    },
    {
      name: "Zoom75",
    },
  ];

  return (
    <View>
      <Text
        className="text-center text-lg"
        style={{ fontFamily: "poppinsMedium" }}
      >
        Fast Moving Items
      </Text>
      <View className="pt-3 px-3">
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <>
              <View className="w-[140px]">
                <View className="flex flex-row items-center">
                  <Image source={item.image} className="w-8 h-8" />
                  <Text>{item.name}</Text>
                </View>
              </View>
            </>
          )}
          sliderWidth={135}
          itemWidth={135}
          layout={"default"}
        />
      </View>
    </View>
  );
};

export default Carousels;
