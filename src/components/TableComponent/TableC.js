import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  Col,
  Row,
  Rows,
  Table,
  TableWrapper,
} from "react-native-reanimated-table";

const TableC = () => {
  const data = {
    tableHead: ["Channel", "Direct Sales", "Wholesale", "Retail"],
    tableTitle: ["Draft", "Confirmed", "Packed", "Shipped", "Invoiced"],
    tableData: [
      ["1", "2", "3"],
      ["1", "2", "3"],
      ["1", "2", "3"],
      ["1", "2", "3"],
      ["1", "2", "3"],
    ],
  };
  return (
    // <View className=" border border-[#CED4DA]">
    //   <ScrollView horizontal={true}>
        <View className="w-[95%] self-center ">
        <View className="border border-[#CED4DA]">
          <Table>
            <Row
              data={data.tableHead}
              flexArr={[1, 1, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={data.tableTitle}
                style={styles.title}
                textStyle={styles.text}
              />
              <Rows
                data={data.tableData}
                flexArr={[1, 1, 1]}
                style={styles.row}
                textStyle={styles.text}

              />
            </TableWrapper>
          </Table>
        </View>
        </View>
    //   {/* </ScrollView> */}
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    fontFamily: "poppinsRegular",
  },
  head: {
    height: 40,
    fontFamily: "poppinsMedium",
  },
  wrapper: { flexDirection: "row" },
  title: {
    backgroundColor: "#f1f8ff",
    fontFamily: "poppinsRegular",
  },
  row: { fontFamily: "poppinsRegular", padding: 16 },
  text: { textAlign: "center", fontFamily: "poppinsRegular" },
});
export default TableC;
