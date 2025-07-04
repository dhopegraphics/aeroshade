import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ModalLayout() {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        presentation: "modal",
        headerStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
        },
        headerTitleStyle: {
          color: isDark ? "#EBFCFF" : "#0F214D",
          fontFamily: "Inter_600SemiBold",
        },
        contentStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
        },
      }}
    >
      <Stack.Screen
        name="location-search"
        options={{
          title: "Search Location",
          headerLeft: () => (
            <TouchableOpacity className="ml-2">
              <Ionicons
                name="close"
                size={24}
                color={isDark ? "#2BA3EC" : "#0B5FB0"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity className="mr-4">
              <Ionicons
                name="search"
                size={20}
                color={isDark ? "#2BA3EC" : "#0B5FB0"}
              />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="drone-selection"
        options={{
          title: "Choose Your AeroShade",
          headerLeft: () => (
            <TouchableOpacity className="ml-2">
              <Ionicons
                name="arrow-back"
                size={24}
                color={isDark ? "#2BA3EC" : "#0B5FB0"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity className="mr-4">
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={isDark ? "#2BA3EC" : "#0B5FB0"}
              />
            </TouchableOpacity>
          ),
          headerTitleContainerStyle: {
            paddingBottom: 8,
          },
        }}
      />
    </Stack>
  );
}
