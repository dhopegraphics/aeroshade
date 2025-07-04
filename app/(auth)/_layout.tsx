import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AuthLayout() {
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
          fontSize: 18,
        },
        headerTitleAlign: "center",

        contentStyle: {
          backgroundColor: isDark ? "#0F214D" : "#EBFCFF",
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Sign In",
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
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: "Create Account",
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
        }}
      />

      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Reset Password",
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
        }}
      />
    </Stack>
  );
}
