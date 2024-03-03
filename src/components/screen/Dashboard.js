import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { SalesDetails } from "../../../data/DummyData";
import { AntDesign } from "@expo/vector-icons";
import Chart from "../../chart/Chart";

const Inventory = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View className=" bg-[#F4F5FC]">
        <Text
          style={{ fontFamily: "poppinsMedium" }}
          className="text-base pt-7 px-3"
        >
          Sales Summary
        </Text>
        <View className="border-b-2 border-[#CED4DA]">
          <View className="py-8 px-3">
            <FlatList
              data={SalesDetails}
              numColumns={2}
              contentContainerStyle={{ gap: 16 }}
              columnWrapperStyle={{ gap: 8 }}
              renderItem={({ item, index }) => {
                return (
                  <View
                    className="w-[49%]  bg-white px-3 py-3 rounded-lg"
                    key={index}
                  >
                    <View className="flex-row items-center flex gap-4">
                      <Image
                        source={item.image}
                        className="w-10 h-10"
                        style={{ resizeMode: "contain" }}
                      />
                      <View>
                        <Text
                          style={{ fontFamily: "poppinsRegular" }}
                          className="text-[#5C6F88] text-xs"
                        >
                          {item.salesIncome}
                        </Text>
                        <Text
                          style={{ fontFamily: "poppinsRegular" }}
                          className="text-[#5C6F88] text-[11px]"
                        >
                          {item.saleHeading}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View className="py-5 w-full flex flex-row px-3">
        <View className="w-[40%]">
          <Text style={{ fontFamily: "poppinsMedium" }} className="text-base">
            Stock Report
          </Text>
        </View>
        <View className="w-full flex flex-row items-center ">
          <View className="w-[30%] flex flex-row space-x-3">
            <View className="rounded-full bg-[#04B4FC] w-5 h-5" />
            <Text
              className="text-[#04B4FC]"
              style={{ fontFamily: "poppinsMedium" }}
            >
              Stock In
            </Text>
          </View>
          <View className="w-[30%] flex flex-row space-x-3">
            <View className="rounded-full bg-[#6C11D9] w-5 h-5" />
            <Text
              className="text-[#6C11D9]"
              style={{ fontFamily: "poppinsMedium" }}
            >
              Stock Out
            </Text>
          </View>
        </View>
      </View>
      <View className="py-5 flex justify-between flex-row px-3">
        <View>
          <Text style={{ fontFamily: "poppinsMedium" }} className="text-base">
            Sales Order
          </Text>
        </View>
        <View className="flex flex-row items-center gap-1">
          <Text
            className="text-[#04B4FC]"
            style={{ fontFamily: "poppinsMedium" }}
          >
            Last 7 Days
          </Text>
          <AntDesign name="down" size={20} color="#04B4FC" />
        </View>
      </View>
      {/* <View className="px-3">
        <View className="flex w-screen overflow-x-scroll flex-row justify-between items-center">
          <View>
            <Text className="" style={{ fontFamily: "poppinsRegular" }}>
              Channel
            </Text>
          </View>
          <View>
            <Text className="" style={{ fontFamily: "poppinsRegular" }}>
              Direct Sales
            </Text>
          </View>
          <View>
            <Text className="" style={{ fontFamily: "poppinsRegular" }}>
              Wholesale
            </Text>
          </View>
          <View>
            <Text className="" style={{ fontFamily: "poppinsRegular" }}>
              Retail
            </Text>
          </View>
        </View>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={({ item, index }) => (
            <>
              <View></View>
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View> */}
      <View className="py-6">
        <View>
          <Text
            className="text-center text-lg"
            style={{ fontFamily: "poppinsMedium" }}
          >
            Fast Moving Items
          </Text>
        </View>
        <View></View>
      </View>
    </>
  );
};

export default Inventory;
