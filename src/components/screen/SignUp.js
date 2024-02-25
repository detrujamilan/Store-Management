import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { APP_ENV } from "@env";

const SignUp = () => {
  const [email, setEmail] = useState("milandetruja2@gmail.com");
  const [password, setPassword] = useState("123456789");

  const baseUrl = "http://192.168.241.33:3000/";

  const handleSubmit = () => {
    axios
      .post(`${baseUrl}user/signup`, {
        email: email,
        password: password,
      })
      .then((respone) => {
        console.log(respone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View className="flex-1 px-5">
        <View>
          <View className="justify-center items-center mt-8">
            <Image
              source={require("../../../src/assets/images/Logo.png")}
              className="w-[160px] h-[146px]"
            />
          </View>
          <Text
            style={{ fontFamily: "poppinsMedium" }}
            className="mt-10 text-lg"
          >
            Hey, Hello 👋
          </Text>
          <View className="mt-3">
            <Text
              style={{ fontFamily: "poppinsRegular" }}
              className="w-[275px] text-base"
            >
              Enter your credentials to access your account
            </Text>
          </View>
          <View className="pt-2">
            {/* <View>
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Name
              </Text>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="#000"
                  className="px-5 py-2"
                  value={name}
                  style={{ fontFamily: "poppinsMedium" }}
                  onChangeText={(text) => {
                    setName(text);
                  }}
                />
              </View>
            </View> */}
            <View className="my-5">
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Email
              </Text>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#000"
                  className="px-5 py-2"
                  value={email}
                  style={{ fontFamily: "poppinsMedium" }}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </View>
            </View>
            <View>
              <View className="flex-row justify-between items-center">
                <Text
                  style={{ fontFamily: "poppinsRegular" }}
                  className="text-lg"
                >
                  Password
                </Text>
                <Text
                  style={{ fontFamily: "poppinsRegular" }}
                  className="text-[#0098FF] text-base"
                >
                  Forgot password?
                </Text>
              </View>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#000"
                  className="px-5 py-2"
                  value={password}
                  style={{ fontFamily: "poppinsMedium" }}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
              </View>
            </View>
          </View>
          <View className="pt-5">
            <TouchableOpacity
              className="justify-center items-center bg-[#0098FF] rounded-[10px]"
              onPress={handleSubmit}
            >
              <Text
                style={{ fontFamily: "poppinsMedium" }}
                className="py-5 text-white text-lg"
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          <View className=" justify-center items-center pt-5">
            <Text style={{ fontFamily: "poppinsRegular" }} className="text-xl">
              Don't have an account? <Text className="font-bold">Sign in</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;
