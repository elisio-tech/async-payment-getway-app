import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "sans-regular": require("@/assets/fonts/Manrope-Regular.ttf"),
    "sans-bold": require("@/assets/fonts/Manrope-Bold.ttf"),
    "sans-medium": require("@/assets/fonts/Manrope-Medium.ttf"),
    "sans-semibold": require("@/assets/fonts/Manrope-SemiBold.ttf"),
    "sans-extrabold": require("@/assets/fonts/Manrope-ExtraBold.ttf"),
    "sans-light": require("@/assets/fonts/Manrope-Light.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
