import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  
} from "react-native";
import React, { useState } from "react";
import { APP_ENV } from "@env";
import axios from "axios";
import Toast from "react-native-toast-message";

const socialData = [
  {
    image: require("../../../src/assets/images/facebook.png"),
  },
  {
    image: require("../../../src/assets/images/google.png"),
  },
  {
    image: require("../../../src/assets/images/iso.png"),
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${APP_ENV}user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: error.response.data.message,
          text1Style: { fontSize: 15 },
        });
      });
  };

  return (
    <>
      <View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
        />
        <View className="justify-center items-center">
          <Image
            source={require("../../../src/assets/images/Logo.png")}
            className="w-[160px] h-[146px] mt-2"
          />
        </View>
        <Text
          style={{ fontFamily: "poppinsRegular" }}
          className="text-center text-[32px] pt-7"
        >
          Welcome back!
        </Text>
        <View className="pt-12 px-8">
          <View className="border-2 rounded-[10px]">
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
          <View className="border-2 rounded-[10px] mt-5">
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              className="px-5 py-2 "
              value={password}
              secureTextEntry={true}
              style={{ fontFamily: "poppinsMedium" }}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </View>
          <View className="justify-end items-end pt-4 ">
            <Text
              style={{ fontFamily: "poppinsRegular" }}
              className="text-base"
            >
              Forgot password?
            </Text>
          </View>
        </View>
        <View className="pt-[53px] px-8">
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-[#0098FF] justify-center items-center rounded-[10px]"
          >
            <Text
              style={{ fontFamily: "poppinsMedium" }}
              className="py-5 text-white text-lg"
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View className=" justify-center items-center px-8 py-4">
          <Text style={{ fontFamily: "poppinsRegular" }} className="text-xl">
            or
          </Text>
        </View> */}
        {/* <View className="px-8">
          <View className="flex-row justify-between items-center">
            {socialData.map((val, index) => (
              <View className="border-2 p-4 rounded-[10px]" key={index}>
                <Image source={val.image} className="w-8 h-8 " />
              </View>
            ))}
          </View>
        </View> */}
        <View className=" justify-center items-center px-8 py-10">
          <Text style={{ fontFamily: "poppinsRegular" }} className="text-xl">
            Don't have an account? <Text className="font-bold">Sign up </Text>
          </Text>
        </View>
      </View>
      <Toast />
    </>
  );
};

export default Login;
