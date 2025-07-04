import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      className={`flex-1 px-6 ${isDark ? "bg-collegeBlue" : "bg-morningBlue"}`}
    >
      <View className="flex-1">
        <Text
          className={`text-2xl font-bold mt-8 ${
            isDark ? "text-yellowBanana" : "text-collegeBlue"
          }`}
        >
          Welcome Back
        </Text>
        <Text
          className={`mt-2 ${isDark ? "text-morningBlue" : "text-collegeBlue"}`}
        >
          Sign in to access your AeroShade account
        </Text>

        <View className="mt-8">
          <Text
            className={`mb-2 ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            Email or Phone
          </Text>
          <TextInput
            className={`p-4 rounded-xl ${
              isDark ? "bg-persianBlue text-white" : "bg-white text-collegeBlue"
            }`}
            placeholder="Enter your email or phone"
            placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
          />

          <Text
            className={`mt-4 mb-2 ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            Password
          </Text>
          <View
            className={`flex-row items-center p-4 rounded-xl ${
              isDark ? "bg-persianBlue" : "bg-white"
            }`}
          >
            <TextInput
              className={`flex-1 ${isDark ? "text-white" : "text-collegeBlue"}`}
              placeholder="Enter your password"
              placeholderTextColor={isDark ? "#AAFIFF" : "#0F214D80"}
              secureTextEntry
            />
            <Ionicons
              name="eye-off"
              size={20}
              color={isDark ? "#AAFIFF" : "#0F214D80"}
            />
          </View>

          <Link href="/(auth)/forgot-password" asChild>
            <TouchableOpacity className="mt-2 self-end">
              <Text
                className={`${isDark ? "text-pictonBlue" : "text-persianBlue"}`}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <TouchableOpacity
          className={`mt-8 py-4 rounded-xl ${
            isDark ? "bg-pictonBlue" : "bg-persianBlue"
          }`}
        >
          <Text className="text-white font-bold text-center">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View
            className={`flex-1 h-px ${
              isDark ? "bg-persianBlue" : "bg-collegeBlue/30"
            }`}
          />
          <Text
            className={`mx-4 ${
              isDark ? "text-morningBlue" : "text-collegeBlue"
            }`}
          >
            or continue with
          </Text>
          <View
            className={`flex-1 h-px ${
              isDark ? "bg-persianBlue" : "bg-collegeBlue/30"
            }`}
          />
        </View>

        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity
            className={`p-3 rounded-xl ${
              isDark ? "bg-persianBlue" : "bg-white"
            }`}
          >
            <Ionicons
              name="logo-google"
              size={24}
              color={isDark ? "#EBFCFF" : "#0F214D"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-3 rounded-xl ${
              isDark ? "bg-persianBlue" : "bg-white"
            }`}
          >
            <Ionicons
              name="logo-apple"
              size={24}
              color={isDark ? "#EBFCFF" : "#0F214D"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="py-4 flex-row justify-center">
        <Text className={`${isDark ? "text-morningBlue" : "text-collegeBlue"}`}>
          Don&apos;t have an account?
        </Text>
        <Link href="/(auth)/signup" asChild>
          <TouchableOpacity className="ml-1">
            <Text
              className={`font-bold ${
                isDark ? "text-pictonBlue" : "text-persianBlue"
              }`}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
