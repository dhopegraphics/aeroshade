import { Stack } from "expo-router";
import * as SplashScreenNative from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreenNative.hideAsync();
    }, 3000);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
      <Stack.Screen name="settings/index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
