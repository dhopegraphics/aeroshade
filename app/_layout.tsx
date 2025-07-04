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
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ title: "Sign In" }} />
      {/* Other screens */}
    </Stack>
  );
}
