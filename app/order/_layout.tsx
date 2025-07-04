import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function OrderLayout() {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: isDark ? "#EBFCFF" : "#0F214D",
          fontFamily: "Inter_600SemiBold",
          fontSize: 18,
        },
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        contentStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
        },
      }}
    >
      <Stack.Screen
        name="confirmation"
        options={{
          title: "Confirm Your Order",
          headerLeft: ({ canGoBack }) =>
            canGoBack && (
              <TouchableOpacity>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={isDark ? "#2BA3EC" : "#0B5FB0"}
                />
              </TouchableOpacity>
            ),
          headerRight: () => (
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={20}
                color={isDark ? "#2BA3EC" : "#0B5FB0"}
              />
              <Text
                className={`ml-1 ${
                  isDark ? "text-pictonBlue" : "text-persianBlue"
                }`}
              >
                Safety
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="tracking"
        options={{
          title: "Live Tracking",
          headerShown: false, // Full-screen map view
        }}
      />

      <Stack.Screen
        name="verification"
        options={{
          title: "Drone Verification",
          headerLeft: ({ canGoBack }) =>
            canGoBack && (
              <TouchableOpacity>
                <Ionicons
                  name="close"
                  size={24}
                  color={isDark ? "#2BA3EC" : "#0B5FB0"}
                />
              </TouchableOpacity>
            ),
          headerRight: () => (
            <TouchableOpacity>
              <Text
                className={`${
                  isDark ? "text-pictonBlue" : "text-persianBlue"
                } font-medium`}
              >
                Help
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="manual-control"
        options={{
          title: "Manual Control",
          headerLeft: ({ canGoBack }) =>
            canGoBack && (
              <TouchableOpacity>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={isDark ? "#2BA3EC" : "#0B5FB0"}
                />
              </TouchableOpacity>
            ),
          headerRight: () => (
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="timer-outline"
                size={20}
                color={isDark ? "#EFEDCE" : "#0F214D"}
              />
              <Text
                className={`ml-1 ${
                  isDark ? "text-yellowBanana" : "text-collegeBlue"
                }`}
              >
                2:00
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="complete"
        options={{
          title: "Trip Complete",
          headerLeft: () => null, // Remove back button
          headerRight: () => (
            <TouchableOpacity>
              <Text
                className={`${
                  isDark ? "text-pictonBlue" : "text-persianBlue"
                } font-medium`}
              >
                Done
              </Text>
            </TouchableOpacity>
          ),
          presentation: "modal", // Slide up on iOS
        }}
      />
    </Stack>
  );
}
