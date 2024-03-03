import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/screen/Login";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Dashboard from "./src/components/screen/Dashboard";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    poppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    poppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
    poppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    poppinsThin: require("./src/assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      {/* <Login /> */}
      {/* <SignUp/> */}
      <Dashboard/>
    </View>
  );
}
