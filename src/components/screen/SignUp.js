import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { APP_ENV } from "@env";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${APP_ENV}user/signup`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      .then((respone) => {
        Toast.show({ type: "success", text1: respone.data, message });
        console.log(respone);
      })
      .catch((error) => {
        Toast.show({ type: "info", text1: error.response.data.message });
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
            <View>
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Name
              </Text>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="firstName"
                  placeholderTextColor="#000"
                  className="px-5 py-2"
                  value={firstName}
                  style={{ fontFamily: "poppinsMedium" }}
                  onChangeText={(text) => {
                    setFirstName(text);
                  }}
                />
              </View>
            </View>
            <View className="mt-5">
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Email
              </Text>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="lastName"
                  placeholderTextColor="#000"
                  className="px-5 py-2"
                  value={lastName}
                  style={{ fontFamily: "poppinsMedium" }}
                  onChangeText={(text) => {
                    setLastName(text);
                  }}
                />
              </View>
            </View>
            <View className="pt-5">
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Password
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
            <View className="pt-5">
              <Text
                style={{ fontFamily: "poppinsRegular" }}
                className="text-lg"
              >
                Password
              </Text>
              <View className="border-2 rounded-[10px] ">
                <TextInput
                  placeholder="password"
                  placeholderTextColor="#000"
                  secureTextEntry={true}
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
      <Toast />
    </>
  );
};

export default SignUp;
