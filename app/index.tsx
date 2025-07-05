import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Animated, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animation for splash screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Hide splash screen and navigate after 3 seconds
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
      router.replace("/onboarding"); // Or '/home' if skipping onboarding
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Home;
