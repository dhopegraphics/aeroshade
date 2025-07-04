import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function AppSplashScreen() {
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
    <View
      className={`flex-1 items-center justify-center ${
        colorScheme === "dark" ? "bg-collegeBlue" : "bg-morningBlue"
      }`}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        {/* <Image
          source={
            colorScheme === "dark"
              ? require("../../assets/logo-dark.png")
              : require("../../assets/logo-light.png")
          }
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <View className="absolute -bottom-20">
          {/* Rain animation placeholder */}
          <View className="flex-row">
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                className={`w-1 h-6 rounded-full ${
                  colorScheme === "dark" ? "bg-pictonBlue" : "bg-persianBlue"
                }`}
                style={{
                  marginHorizontal: 4,
                  transform: [{ translateY: new Animated.Value(0) }],
                }}
              />
            ))}
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
